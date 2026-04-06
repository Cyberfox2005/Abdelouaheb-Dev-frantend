const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  serviceId: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 }
});

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema],
  total: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', CartSchema);
