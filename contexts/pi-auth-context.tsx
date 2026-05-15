"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface PiUser {
  uid: string;
  username: string;
}

interface AuthContextType {
  user: PiUser | null;
  loading: boolean;
  signIn: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<PiUser | null>(null);
  const [loading, setLoading] = useState(true);

  const authenticate = async () => {
    try {
      setLoading(true);
      // 1. Await Pi.init as a Promise
      await window.Pi.init({ version: "2.0", sandbox: true });

      // 2. Authenticate with "username" scope
      const auth = await window.Pi.authenticate(['username'], (payment) => {
        console.log("Payment in progress", payment);
      });

      // 3. Send token to backend for validation
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: auth.accessToken }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (err) {
      console.error("Pi Authentication failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn: authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// TypeScript global declaration for window.Pi
declare global {
  interface Window {
    Pi: any;
  }
}
