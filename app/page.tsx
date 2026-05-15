"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  BookOpen,
  Camera,
  Lightbulb,
  User,
  Search,
  Heart,
  Share2,
  Play,
  Clock,
  Star,
  Bookmark,
  Menu,
  Bell,
} from "lucide-react"
import Image from "next/image"

export default function BonsaiStudioApp() {
  const [activeTab, setActiveTab] = useState("home")

  const featuredContent = [
    {
      id: 1,
      title: "Cách tạo dáng cây Bonsai cho người mới bắt đầu",
      description: "Hướng dẫn chi tiết từng bước để tạo dáng cây bonsai đầu tiên của bạn",
      image: "/placeholder.svg?height=200&width=300",
      duration: "15 phút",
      difficulty: "Cơ bản",
      views: "2.3k",
    },
    {
      id: 2,
      title: "Kỹ thuật cắt tỉa và uốn cành",
      description: "Những kỹ thuật cơ bản để tạo hình và duy trì dáng cây",
      image: "/placeholder.svg?height=200&width=300",
      duration: "20 phút",
      difficulty: "Trung bình",
      views: "1.8k",
    },
  ]

  const categories = [
    { name: "Nuôi phôi", icon: "🌱", count: 12 },
    { name: "Tạo dáng", icon: "✂️", count: 18 },
    { name: "Chăm sóc", icon: "💧", count: 15 },
    { name: "Dụng cụ", icon: "🔧", count: 8 },
  ]

  const recentTips = [
    {
      title: "Thời điểm tốt nhất để cắt tỉa",
      content: "Mùa xuân và đầu mùa hè là thời điểm lý tưởng...",
      time: "2 giờ trước",
    },
    {
      title: "Cách chọn chậu phù hợp",
      content: "Kích thước chậu nên bằng 2/3 chiều cao cây...",
      time: "5 giờ trước",
    },
    {
      title: "Tưới nước đúng cách",
      content: "Kiểm tra độ ẩm đất bằng cách chọc tăm...",
      time: "1 ngày trước",
    },
  ]

  const HomeContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg">
        <div>
          <h1 className="text-xl font-bold">Can Studio Bonsai</h1>
          <p className="text-sm opacity-90">Chào mừng trở lại!</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative px-4">
        <Search className="absolute left-7 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm kiếm hướng dẫn, mẹo hay..." className="pl-10" />
      </div>

      {/* Categories */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-3">Danh mục</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} bài viết</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-3">Nội dung nổi bật</h2>
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4">
            {featuredContent.map((content) => (
              <Card key={content.id} className="min-w-[280px] cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={content.image || "/placeholder.svg"}
                    alt={content.title}
                    width={280}
                    height={160}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      <Play className="h-3 w-3 mr-1" />
                      {content.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2 line-clamp-2">{content.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{content.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{content.difficulty}</span>
                    <span>{content.views} lượt xem</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Recent Tips */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-3">Mẹo mới nhất</h2>
        <div className="space-y-3">
          {recentTips.map((tip, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{tip.content}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{tip.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const TutorialsContent = () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Hướng dẫn</h2>
        <Button variant="outline" size="sm">
          Lọc
        </Button>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <Card key={item} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex gap-4">
                <Image
                  src="/placeholder.svg?height=100&width=120"
                  alt="Tutorial thumbnail"
                  width={120}
                  height={100}
                  className="w-30 h-25 object-cover rounded-l-lg"
                />
                <div className="flex-1 p-4">
                  <h3 className="font-medium mb-2">Kỹ thuật uốn cành cơ bản cho người mới</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Học cách uốn cành một cách an toàn và hiệu quả...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      12 phút
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      4.8
                    </span>
                    <span>1.2k lượt xem</span>
                  </div>
                </div>
                <div className="p-4">
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const GalleryContent = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Thư viện ảnh</h2>
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card key={item} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Bonsai gallery"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6 bg-black/50 text-white hover:bg-black/70">
                    <Heart className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium">Cây thông 5 năm tuổi</p>
                <p className="text-xs text-muted-foreground">Dáng thác đổ</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const TipsContent = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mẹo & Thủ thuật</h2>
      <div className="space-y-4">
        {[
          {
            title: "Cách nhận biết cây cần nước",
            content: "Quan sát màu sắc đất và độ ẩm bằng cách chọc tăm xuống đất 2-3cm...",
            category: "Chăm sóc",
            time: "1 giờ trước",
          },
          {
            title: "Thời điểm tốt nhất để thay chậu",
            content: "Mùa xuân (tháng 3-4) là thời điểm lý tưởng để thay chậu cho hầu hết các loại bonsai...",
            category: "Kỹ thuật",
            time: "3 giờ trước",
          },
          {
            title: "Cách làm sạch lá cây",
            content: "Sử dụng bông tẩm nước ấm để lau nhẹ nhàng từng chiếc lá...",
            category: "Chăm sóc",
            time: "6 giờ trước",
          },
        ].map((tip, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {tip.category}
                </Badge>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Heart className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <h3 className="font-medium mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tip.content}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{tip.time}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const ProfileContent = () => (
    <div className="p-4">
      <div className="text-center mb-6">
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold">Can Studio Bonsai</h2>
        <p className="text-muted-foreground">Người hướng dẫn</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold">127</div>
          <div className="text-sm text-muted-foreground">Bài viết</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">2.3k</div>
          <div className="text-sm text-muted-foreground">Người theo dõi</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">4.9</div>
          <div className="text-sm text-muted-foreground">Đánh giá</div>
        </div>
      </div>

      <div className="space-y-3">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Bài viết của tôi</h3>
              <p className="text-sm text-muted-foreground">Quản lý nội dung đã đăng</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bookmark className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Đã lưu</h3>
              <p className="text-sm text-muted-foreground">Nội dung đã đánh dấu</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium">Cài đặt tài khoản</h3>
              <p className="text-sm text-muted-foreground">Thông tin cá nhân</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex-1 overflow-auto pb-16">
          <TabsContent value="home" className="mt-0">
            <HomeContent />
          </TabsContent>
          <TabsContent value="tutorials" className="mt-0">
            <TutorialsContent />
          </TabsContent>
          <TabsContent value="gallery" className="mt-0">
            <GalleryContent />
          </TabsContent>
          <TabsContent value="tips" className="mt-0">
            <TipsContent />
          </TabsContent>
          <TabsContent value="profile" className="mt-0">
            <ProfileContent />
          </TabsContent>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <TabsList className="grid w-full grid-cols-5 h-16 bg-background border-t">
            <TabsTrigger value="home" className="flex flex-col gap-1 data-[state=active]:text-green-600">
              <Home className="h-5 w-5" />
              <span className="text-xs">Trang chủ</span>
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="flex flex-col gap-1 data-[state=active]:text-green-600">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">Hướng dẫn</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex flex-col gap-1 data-[state=active]:text-green-600">
              <Camera className="h-5 w-5" />
              <span className="text-xs">Thư viện</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex flex-col gap-1 data-[state=active]:text-green-600">
              <Lightbulb className="h-5 w-5" />
              <span className="text-xs">Mẹo hay</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col gap-1 data-[state=active]:text-green-600">
              <User className="h-5 w-5" />
              <span className="text-xs">Cá nhân</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}
