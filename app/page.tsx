"use client";

import AuthHeader from '../components/AuthHeader';

export default function Home() {
  // ĐÂY LÀ NƠI BẠN SỬA NỘI DUNG: Thay đổi tên và số lượng bài viết ở đây
  const categories = [
    { title: "Nuôi phôi", count: "12 bài viết", icon: "🌱", color: "text-green-600" },
    { title: "Tạo dáng", count: "18 bài viết", icon: "✂️", color: "text-red-600" },
    { title: "Chăm sóc", count: "15 bài viết", icon: "💧", color: "text-blue-600" },
    { title: "Dụng cụ", count: "8 bài viết", icon: "🛠️", color: "text-gray-600" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Thanh đầu trang đã có nút đăng nhập Pi */}
      <AuthHeader />

      <div className="max-w-md mx-auto p-4">
        {/* Ô tìm kiếm */}
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Tìm kiếm hướng dẫn, mẹo hay..." 
            className="w-full p-3 pl-10 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="absolute left-3 top-3">🔍</span>
        </div>

        {/* Danh mục */}
        <h2 className="font-bold text-lg mb-4 text-gray-800">Danh mục</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer">
              <div className={`text-2xl mb-2 ${cat.color}`}>{cat.icon}</div>
              <div className="font-bold text-gray-800">{cat.title}</div>
              <div className="text-xs text-gray-500">{cat.count}</div>
            </div>
          ))}
        </div>

        {/* Nội dung nổi bật */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-gray-800">Nội dung nổi bật</h2>
          <button className="text-green-600 text-sm font-medium">Xem tất cả</button>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
          <div className="aspect-video bg-gray-200 relative flex items-center justify-center text-gray-400">
             {/* Sau này bạn thay link ảnh thật vào đây */}
             Ảnh minh họa Bonsai
             <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded">15 phút</span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-1">Cách tạo dáng cây Bonsai cho người mới bắt đầu</h3>
            <p className="text-sm text-gray-500">Hướng dẫn chi tiết từng bước để tạo ra tác phẩm đầu tay...</p>
          </div>
        </div>
      </div>

      {/* Thanh điều hướng dưới cùng (Menu Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around p-3 pb-6 shadow-lg">
        <div className="flex flex-col items-center text-green-600">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-medium">Trang chủ</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">📖</span>
          <span className="text-[10px]">Hướng dẫn</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🖼️</span>
          <span className="text-[10px]">Thư viện</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">👤</span>
          <span className="text-[10px]">Cá nhân</span>
        </div>
      </div>
    </main>
  );
}
