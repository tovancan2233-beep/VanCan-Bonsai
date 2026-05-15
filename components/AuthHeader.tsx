"use client";

import { useAuth } from '@/contexts/AuthContext';

export default function AuthHeader() {
  const { user, loading, signIn } = useAuth();

  if (loading) return <div className="p-4 text-center">Đang kết nối Pi Network...</div>;

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md border-b">
      <div className="font-bold text-xl text-green-700">VanCan Bonsai</div>
      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Chào, {user.username}</span>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
              {user.username[0].toUpperCase()}
            </div>
          </div>
        ) : (
          <button 
            onClick={signIn}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            Đăng nhập với Pi
          </button>
        )}
      </div>
    </nav>
  );
}
