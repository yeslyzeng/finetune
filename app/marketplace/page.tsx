export default function MarketplacePage() {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Podcast Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 播客卡片列表 */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-card rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Podcast Title {id}</h3>
              <p className="text-muted-foreground">Author Name</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">30 mins</span>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                  Listen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }