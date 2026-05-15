"use client";

import { useAuth } from '../contexts/AuthContext';

export default function AuthHeader() {
  const { user, loading, signIn } = useAuth();

  if (loading) return <div className="p-4 text-center text-sm">Đang kết nối Pi...</div>;

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm border-b">
      <div className="font-bold text-green-700">VanCan Bonsai</div>
      <div>
        {user ? (
          <span className="text-sm">Chào, {user.username}</span>
        ) : (
          <button onClick={signIn} className="text-sm bg-purple-600 text-white px-3 py-1 rounded">
            Đăng nhập
          </button>
        )}
      </div>
    </div>
  );
}
