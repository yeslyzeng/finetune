export default function MarketplacePage() {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Podcast Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 临时的播客卡片示例 */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">Sample Podcast {i}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of this amazing podcast series.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By Creator Name</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  