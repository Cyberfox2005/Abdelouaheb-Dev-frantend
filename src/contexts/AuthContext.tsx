import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  userData: any | null;
  loading: boolean;
  logout: () => void;
  token: string | null;
  login: (token: string, user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('node_token');
    
    if (storedToken) {
      // Fetch user profile from Node backend
      fetch("http://localhost:5000/api/auth/me", {
        headers: { "Authorization": `Bearer ${storedToken}` }
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          localStorage.removeItem('node_token');
          setUser(null);
          setToken(null);
        } else {
          setUser({ id: data._id, name: data.name, email: data.email });
          setToken(storedToken);
          setUserData(data);
        }
      })
      .catch((err) => {
        console.error("Auth init error:", err);
      })
      .finally(() => {
        setLoading(false);
      })
    } else {
      setLoading(false);
    }
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('node_token', newToken);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('node_token');
    setToken(null);
    setUser(null);
    setUserData(null);
  };

  const value = {
    user,
    userData,
    loading,
    logout,
    token,
    login
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
