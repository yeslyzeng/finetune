'use client';

import { Upload, Play, Pause, SkipBack, SkipForward, Download, Link } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function StudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleSkipBack = () => console.log('Skip back');
  const handleSkipForward = () => console.log('Skip forward');
  const handleDownload = () => console.log('Download');
  const handleExport = () => console.log('Export');

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="w-full border-b border-gray-200 p-4">
        <div className="container mx-auto flex justify-end">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md"
            onClick={handleExport}
          >
            Export
          </Button>
        </div>
      </header>

      {/* 主要内容区域 */}
      <div className="flex flex-1">
        {/* 左侧面板 - 40% 宽度 */}
        <div className="w-[40%] border-r border-gray-200 p-6 space-y-6 bg-white">
          {/* 上传区域 */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-[#404040]">Upload the startup materials</h2>
            <div className="flex gap-2">
              <Button 
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                onClick={() => console.log('Upload clicked')}
              >
                <Upload className="w-4 h-4" />
                Local upload
              </Button>
              <Button 
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                onClick={() => console.log('Paste link clicked')}
              >
                <Link className="w-4 h-4" />
                Paste file link
              </Button>
            </div>
          </div>

          {/* 表单区域 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#404040]">Choose the preferred tone for podcast</label>
              <Input 
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Choose the preferred tone for podcast" 
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#404040]">Create the name of the host</label>
              <Input 
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Create the name of the host"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#404040]">Create the bio of the host</label>
              <Textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Create the bio of the host"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#404040]">Create the name of the guest</label>
              <Input 
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Create the name of the guest"
              />
            </div>
          </div>
        </div>

        {/* 右侧内容区 */}
        <div className="w-[60%] flex flex-col h-full bg-white">
          {/* 预览区域 */}
          <div className="flex-1 p-6">
            <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Preview Area</span>
            </div>
          </div>

          {/* 音频控制栏 */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSkipBack}
                className="hover:bg-gray-100 rounded-full text-orange-500"
              >
                <SkipBack className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayPause}
                className="hover:bg-gray-100 rounded-full text-orange-500"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSkipForward}
                className="hover:bg-gray-100 rounded-full text-orange-500"
              >
                <SkipForward className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleDownload}
                className="hover:bg-gray-100 rounded-full text-orange-500"
              >
                <Download className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
