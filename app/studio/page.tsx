'use client';
import { Upload, Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { useState } from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");

  return (
    <div className="min-h-screen flex">
      {/* 左侧面板 - 4/10 宽度 */}
      <div className="w-4/10 border-r border-gray-200 p-6 space-y-6 bg-white">
        {/* 上传区域 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upload the startup materials</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Upload className="w-4 h-4" />
              Local upload
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              Paste file link
            </button>
          </div>
        </div>

        {/* 语气选择 */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Choose the preferred tone</h2>
          <Select>
            <option>Professional</option>
            <option>Casual</option>
            <option>Friendly</option>
          </Select>
        </div>

        {/* 主持人信息 */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Host Information</h2>
          <Input placeholder="Create the name of the host" />
          <Textarea placeholder="Create the bio of the host" rows={4} />
        </div>

        {/* 嘉宾信息 */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Guest Information</h2>
          <Input placeholder="Create the name of the guest" />
        </div>
      </div>

      {/* 右侧内容区 - 6/10 宽度 */}
      <div className="w-6/10 flex flex-col h-screen">
        {/* 主要内容区域 */}
        <div className="flex-1 p-6">
          <div className="h-full bg-gray-50 rounded-lg p-4">
            <Textarea 
              className="w-full h-full resize-none bg-white"
              placeholder="Generated content will appear here..."
            />
          </div>
        </div>

        {/* 底部控制栏 */}
        <div className="border-t border-gray-200 p-4 bg-white">
          {/* 播放控制器 */}
          <div className="flex flex-col items-center gap-4">
            {/* 进度条 */}
            <div className="w-full">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-1/3 h-full bg-[#E97A53] rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{currentTime}</span>
                <span>{totalTime}</span>
              </div>
            </div>

            {/* 控制按钮 */}
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <SkipBack className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                className="p-3 bg-[#E97A53] rounded-full hover:bg-[#d16544]"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? 
                  <Pause className="w-6 h-6 text-white" /> : 
                  <Play className="w-6 h-6 text-white" />
                }
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <SkipForward className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* 导出按钮 - 固定在右上角 */}
        <button className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-[#E97A53] text-white rounded-lg hover:bg-[#d16544]">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
}
