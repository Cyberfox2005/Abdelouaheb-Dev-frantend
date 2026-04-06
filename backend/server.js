const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

app.use(cors());
app.use(express.json());

// Database connection
// In a real app we'd connect to MongoDB atlas. For dev, we can connect to a local db
// or just mock it. We will connect to local MongoDB. 
mongoose.connect('mongodb://localhost:27017/portfolioShop', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Models
const User = require('./models/User');
const Cart = require('./models/Cart');

// Middleware for auth
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
  
  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ error: 'Token is not valid' });
  }
};

// Routes

// 1. Auth Signup
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already exists' });
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    user = new User({ name, email, password: hashedPassword });
    await user.save();
    
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Auth Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User does not exist' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. User verify config
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Update / Save Cart
app.post('/api/cart', authMiddleware, async (req, res) => {
  try {
    const { items, total } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    
    if (cart) {
      cart.items = items;
      cart.total = total;
      cart.updatedAt = Date.now();
      cart = await cart.save();
      return res.json(cart);
    }
    
    const newCart = new Cart({
      user: req.user.id,
      items,
      total
    });
    
    await newCart.save();
    res.json(newCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Get User's Cart
app.get('/api/cart', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.json({ items: [], total: 0 }); // Empty cart
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Checkout
app.post('/api/checkout', authMiddleware, async (req, res) => {
  try {
    // Empty the user's cart
    let cart = await Cart.findOne({ user: req.user.id });
    if (cart) {
      cart.items = [];
      cart.total = 0;
      await cart.save();
    }
    res.json({ message: 'Order created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
