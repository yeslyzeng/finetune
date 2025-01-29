'use client';

import React, { useState } from 'react';
import { Search, Play, Menu, X, Volume2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import type { Track } from './components/AudioPlayer/types';

const AudioPlayer = dynamic(() => import('./components/AudioPlayer'), { ssr: false });

// 定义图片尺寸常量
const IMAGE_SIZES = {
  recommended: "800x450",  // 16:9 宽高比
  popular: "400x400",      // 正方形
  newArrivals: "160x160"   // 小正方形缩略图
} as const;

const COLORS = {
  background: 'FEEFDD',  // 页面背景色
  primary: 'FF4000',     // 橙色
  secondary: 'FAAA8D',   // 珊瑚粉
  dark: '201E1F',        // 深色文字
};

// 使用 placehold.co 作为占位图片服务
const getPlaceholderUrl = (size: string, text: string) => 
  `https://placehold.co/${size}/FF4000/FFFFFF?text=${encodeURIComponent(text)}`;

const defaultImage = getPlaceholderUrl("400x400", "No Image");

// Define categories
const categories = [
  "Marketing-Focused Startups",
  "Fundraising-Focused Startups",
  "Recruitment-Focused Startups",
  "Partnership-Focused Startups"
];

const SAMPLE_TRACKS: Track[] = [
  {
    id: '1',
    title: "Revolutionizing African Finance: The Fingo Africa Story with Kolento",
    channel: "Fingo Africa",
    url: "https://example.com/audio1.mp3",
    thumbnail: getPlaceholderUrl(IMAGE_SIZES.recommended, "Fingo Africa Podcast"),
    description: "In this episode of our podcast, host Jack sits down with Kolento, the visionary founder of Fingo Africa, the first pan-African neobank focused on youth financial empowerment. Discover how this innovative fintech startup is reshaping the banking landscape across Africa, making financial services more accessible to millions of young Africans through digital solutions.",
    duration: "23:14",
    date: "Jan 24",
    chapters: [
      { title: "The Vision Behind Fingo", duration: "03:45", startTime: "00:00" },
      { title: "African Financial Landscape", duration: "04:45", startTime: "03:46" },
      { title: "Product Innovation & Technology", duration: "04:44", startTime: "08:31" },
      { title: "Growth & Performance", duration: "04:29", startTime: "13:16" },
      { title: "Business Model & Future Plans", duration: "04:44", startTime: "17:46" },
      { title: "Market Strategy & Closing Thoughts", duration: "04:29", startTime: "22:31" }
    ]
  },
  {
    id: '2',
    title: "Fundraising for Startups",
    channel: "VC Insights",
    url: "https://example.com/audio2.mp3",
    thumbnail: getPlaceholderUrl(IMAGE_SIZES.recommended, "Fundraising Podcast"),
    description: "Join us for an insightful discussion on startup fundraising strategies with leading venture capitalists. Learn about current market trends, pitch deck essentials, and how to approach potential investors in today's competitive landscape.",
    duration: "15:30",
    date: "Jan 23",
    chapters: [
      { title: "Understanding the VC Landscape", duration: "05:00", startTime: "00:00" },
      { title: "Pitch Deck Essentials", duration: "04:30", startTime: "05:00" },
      { title: "Funding Rounds Explained", duration: "05:30", startTime: "09:30" }
    ]
  },
  {
    id: '3',
    title: "Recruitment Best Practices",
    channel: "HR Hub",
    url: "https://example.com/audio3.mp3",
    thumbnail: getPlaceholderUrl(IMAGE_SIZES.recommended, "Recruitment Podcast"),
    description: "Expert HR leaders share their insights on modern recruitment strategies, from building attractive job descriptions to creating an inclusive hiring process. Perfect for startups looking to build their dream team.",
    duration: "18:45",
    date: "Jan 22",
    chapters: [
      { title: "Modern Recruitment Strategies", duration: "04:00", startTime: "00:00" },
      { title: "Building Inclusive Teams", duration: "05:00", startTime: "04:00" },
      { title: "Retention Strategies", duration: "04:30", startTime: "09:00" }
    ]
  }
];

export default function MarketplacePage() {
  const [currentTrack, setCurrentTrack] = useState<Track>(SAMPLE_TRACKS[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null);

  const handlePlay = (track: Track) => {
    setCurrentTrack(track);
    setShowSidebar(true);
  };

  const handleTrackEnd = () => {
    const currentIndex = SAMPLE_TRACKS.findIndex(track => track.id === currentTrack.id);
    const nextTrack = SAMPLE_TRACKS[(currentIndex + 1) % SAMPLE_TRACKS.length];
    setCurrentTrack(nextTrack);
  };

  const getImageUrl = (track: Track, type: 'Popular' | 'New' | 'Recommended') => {
    const size = type === 'Popular' ? IMAGE_SIZES.popular : 
                 type === 'New' ? IMAGE_SIZES.newArrivals :
                 IMAGE_SIZES.recommended;
                 
    const text = `${type}+${track.title.slice(0, 20)}`;
    return getPlaceholderUrl(size, text);
  };

  const renderTrackDescription = (track: Track, isExpanded: boolean = false, isRecommended: boolean = false) => {
    if (isRecommended) return null;

    return (
      <div className="relative">
        <p className={`text-sm text-gray-600 ${!isExpanded && 'line-clamp-2'}`}>
          {track.description}
        </p>
        {track.description.length > 150 && (
          <button 
            onClick={() => setExpandedDescription(expandedDescription === track.id ? null : track.id)}
            className="absolute right-0 bottom-0 bg-white pl-2 text-primary text-sm hover:text-primary-dark"
          >
            {expandedDescription === track.id ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    );
  };

  const renderRecommendedCard = (track: Track) => (
    <div key={track.id} className="relative bg-primary text-white rounded-lg overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <img 
          src={getImageUrl(track, 'Recommended')}
          alt={track.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
        
        <div className="absolute inset-0 p-6 flex flex-col">
          <div className="mb-auto">
            <p className="text-sm text-white/80 mb-3">Episode • {track.channel}</p>
            <h2 className="text-xl font-bold leading-tight min-h-[3.5rem] line-clamp-2">
              {track.title}
            </h2>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <span>{track.date}</span>
              <span>•</span>
              <span>{track.duration}</span>
            </div>
            <button 
              onClick={() => handlePlay(track)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors group"
            >
              <Play className="w-5 h-5 text-primary group-hover:text-primary-dark" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderChapters = (track: Track) => (
    <div className="space-y-2">
      {track.chapters.map((chapter, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <Play className="w-4 h-4" />
          <span className="flex-1">{chapter.title}</span>
          <span className="text-gray-500">{chapter.startTime}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-[#FEEFDD]">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Content */}
        <div className="w-2/3 overflow-y-auto p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Podcast Marketplace</h1>
            <div className="relative w-full max-w-md mb-8">
              <input
                type="text"
                placeholder="Search podcasts..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white hover:bg-gray-50 rounded-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Recommended Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Recommended</h2>
            <div className="grid grid-cols-2 gap-4">
              {SAMPLE_TRACKS.slice(0, 2).map((track) => renderRecommendedCard(track))}
            </div>
          </div>

          {/* Popular Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Popular</h2>
            <div className="grid grid-cols-3 gap-4">
              {SAMPLE_TRACKS.map((track) => (
                <div key={track.id} className="bg-white rounded-lg shadow p-4">
                  <div className="aspect-square bg-gray-100 rounded-md mb-2 overflow-hidden">
                    <img 
                      src={getImageUrl(track, 'Popular')}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold truncate">{track.title}</h3>
                  <p className="text-sm text-gray-600 truncate">{track.channel}</p>
                  <button 
                    onClick={() => handlePlay(track)}
                    className="mt-2 flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
            <div className="space-y-4">
              {SAMPLE_TRACKS.map((track) => (
                <div key={track.id} className="flex items-center gap-4 bg-white rounded-lg shadow p-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={getImageUrl(track, 'New')}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{track.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{track.channel}</p>
                  </div>
                  <button 
                    onClick={() => handlePlay(track)}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <Play className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Current Episode */}
        <div className={`fixed md:relative md:w-1/3 inset-y-0 right-0 w-full md:translate-x-0 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'} bg-[#FEEFDD] border-l border-gray-200 z-40 overflow-y-auto`}>
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
                <img 
                  src={currentTrack.thumbnail || defaultImage}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-4">
                <p className="text-sm opacity-80">Episode • {currentTrack.channel}</p>
              </div>
              <h2 className="text-xl font-semibold mb-2">{currentTrack.title}</h2>
              <div className="flex items-center text-sm text-gray-600 space-x-2 mb-4">
                <span>{currentTrack.date}</span>
                <span>•</span>
                <span>{currentTrack.duration}</span>
              </div>
              <div className="bg-gray-50 rounded-md p-4 mb-4">
                {renderTrackDescription(currentTrack, expandedDescription === currentTrack.id)}
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Chapters</h3>
                {renderChapters(currentTrack)}
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Audio Player */}
    <div className="sticky bottom-0 bg-white border-t border-gray-200 z-50">
            <AudioPlayer
              currentTrack={currentTrack}
              onTrackEnd={handleTrackEnd}
            />
          </div>
        </div>
      );
}