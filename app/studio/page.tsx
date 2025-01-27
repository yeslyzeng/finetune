export default function StudioPage() {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Creator Studio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧上传区域 */}
          <div className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Drag and drop your audio file here</p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md">
                Upload Audio
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Podcast Title"
                className="w-full p-2 rounded-md border"
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 rounded-md border min-h-[120px]"
              />
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md">
                Publish
              </button>
            </div>
          </div>
          
          {/* 右侧历史记录 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Podcasts</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((id) => (
                <div key={id} className="bg-card p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Episode {id}</h3>
                    <p className="text-sm text-muted-foreground">Published 2 days ago</p>
                  </div>
                  <button className="text-primary">Edit</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }