'use client';
import { Upload, Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* 左侧面板 - 40% 宽度 */}
      <div className="w-[40%] border-r border-gray-200 p-6 space-y-6 bg-white">
        {/* 上传区域 */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-900">Upload the startup materials</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm">
              <Upload className="w-4 h-4" />
              Local upload
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm">
              Paste file link
            </button>
          </div>
        </div>

        {/* 表单区域 */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Choose the preferred tone for podcast</label>
            <Input 
              className="bg-gray-50 text-gray-900" 
              placeholder="Choose the preferred tone for podcast" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Create the name of the host</label>
            <Input 
              className="bg-gray-50 text-gray-900" 
              placeholder="Create the name of the host" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Create the bio of the host</label>
            <Textarea 
              className="bg-gray-50 text-gray-900" 
              placeholder="Create the bio of the host"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Create the name of the guest</label>
            <Input 
              className="bg-gray-50 text-gray-900" 
              placeholder="Create the name of the guest" 
            />
          </div>
        </div>
      </div>

      {/* 右侧内容区 - 60% 宽度 */}
      <div className="w-[60%] flex flex-col h-screen bg-white">
        {/* 顶部操作栏 */}
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#E97A53] text-white rounded-lg">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* 主要内容区域 */}
        <div className="flex-1 p-6">
          <Textarea 
            className="w-full h-full resize-none border border-gray-200 bg-white text-gray-900"
            placeholder="Generated content will appear here..."
          />
        </div>

        {/* 底部控制栏 */}
        <div className="p-6 border-t border-gray-200">
          {/* 进度条 */}
          <div className="w-full mb-4">
            <div className="w-full h-1 bg-gray-100 rounded-full">
              <div className="w-1/3 h-full bg-[#E97A53] rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>00:00</span>
              <span>00:00</span>
            </div>
          </div>

          {/* 控制按钮 */}
          <div className="flex justify-center items-center gap-6">
            <button className="p-2">
              <SkipBack className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="p-3 bg-[#E97A53] rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 
                <Pause className="w-6 h-6 text-white" /> : 
                <Play className="w-6 h-6 text-white" />
              }
            </button>
            <button className="p-2">
              <SkipForward className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
