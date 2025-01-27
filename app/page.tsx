'use client';
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-2 text-gray-800">
          From Pitch to Funded,
        </h1>
        <h2 className="text-4xl font-bold mb-6 text-[#E97A53]">
          FinTune it
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create, share, and monetize your podcasts with our all-in-one platform
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/studio" 
            className="inline-flex items-center bg-[#E97A53] text-white px-8 py-3 rounded-full hover:bg-[#d16544] transition-all shadow-lg hover:shadow-xl"
          >
            Start Creating
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link 
            href="/marketplace" 
            className="inline-flex items-center bg-white text-[#E97A53] border-2 border-[#E97A53] px-8 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl"
          >
            Browse Podcasts
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="relative max-w-6xl mx-auto">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-[#E97A53]" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-[#E97A53]" />
          </button>
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Feature 1 */}
            <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow snap-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E97A53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Studio</h3>
              <p className="text-gray-600">
                Record and edit your podcasts with our state-of-the-art online studio
              </p>
            </div>

            {/* Feature 2 */}
            <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow snap-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E97A53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Monetization</h3>
              <p className="text-gray-600">
                Turn your passion into profit with our built-in monetization tools
              </p>
            </div>

            {/* Feature 3 */}
            <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow snap-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E97A53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Share your content with listeners worldwide through our marketplace
              </p>
            </div>

            {/* Feature 4 */}
            <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow snap-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E97A53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track your growth with detailed analytics and audience insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
