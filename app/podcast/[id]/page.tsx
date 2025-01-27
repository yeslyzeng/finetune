import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

export default function PodcastPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* 顶部内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 左侧封面图 */}
          <div className="aspect-square bg-muted rounded-lg"></div>
          
          {/* 右侧文字信息 */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Titike EP</h1>
            <p className="text-muted-foreground">Channel name</p>
            <div className="bg-card rounded-lg p-4">
              <h2 className="font-semibold mb-2">Transcript</h2>
              <p className="text-muted-foreground">
                Podcast transcript content goes here...
              </p>
            </div>
          </div>
        </div>

        {/* 底部播放控制栏 */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
          <div className="max-w-4xl mx-auto">
            {/* 进度条 */}
            <div className="mb-4 h-1 bg-muted rounded-full">
              <div className="h-full w-1/3 bg-primary rounded-full"></div>
            </div>
            
            {/* 控制按钮 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm">1x</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-full">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-primary text-primary-foreground rounded-full">
                    <Play className="w-6 h-6" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full">
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* 音量控制 */}
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                <div className="w-24 h-1 bg-muted rounded-full">
                  <div className="h-full w-2/3 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}