'use client';

import React, { useState } from 'react';
import { Search, Play, Menu, X, Volume2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import type { Track } from '@/app/marketplace/components/AudioPlayer/types';

const AudioPlayer = dynamic(() => import('./components/AudioPlayer'), { ssr: false });

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
    thumbnail: "/episode-pic.jpg",
    description: "In this episode of our podcast, host Jack sits down with Kolento, the visionary founder of Fingo Africa, the first pan-African neobank focused on youth financial empowerment. Discover how this innovative fintech startup is reshaping the banking landscape across Africa.",
    duration: "23:14",
    date: "Jan 24",
    chapters: [
      { title: "The Vision Behind Fingo", duration: "03:45", startTime: "00:00" },
      { title: "African Financial Landscape", duration: "04:45", startTime: "03:46" },
      { title: "Business Model & Future Plans", duration: "04:44", startTime: "17:46" }
    ]
  },
  {
    id: '2',
    title: "Building Sustainable Tech Communities in East Africa",
    channel: "Tech Horizons",
    url: "https://example.com/audio2.mp3",
    thumbnail: "/episode-pic.jpg",
    description: "Join us in conversation with leading tech community builders from Kenya, Tanzania, and Uganda as they share their experiences in fostering sustainable tech ecosystems in East Africa.",
    duration: "25:30",
    date: "Jan 25",
    chapters: [
      { title: "Introduction to East African Tech", duration: "05:00", startTime: "00:00" },
      { title: "Community Building Challenges", duration: "10:15", startTime: "05:00" },
      { title: "Future of Tech in East Africa", duration: "10:15", startTime: "15:15" }
    ]
  },
  {
    id: '3',
    title: "Healthcare Innovation in Nigeria: TeleHealth Revolution",
    channel: "HealthTech Africa",
    url: "https://example.com/audio3.mp3",
    thumbnail: "/episode-pic.jpg",
    description: "Exploring the rapid growth of telehealth solutions in Nigeria and their impact on healthcare accessibility.",
    duration: "28:45",
    date: "Jan 26",
    chapters: [
      { title: "Current Healthcare Challenges", duration: "09:15", startTime: "00:00" },
      { title: "TeleHealth Solutions", duration: "09:15", startTime: "09:15" },
      { title: "Future Outlook", duration: "10:15", startTime: "19:30" }
    ]
  },
  {
    id: '4',
    title: "Sustainable Agriculture Tech in Rwanda",
    channel: "AgriTech Today",
    url: "https://example.com/audio4.mp3",
    thumbnail: "/episode-pic.jpg",
    description: "How Rwandan startups are leveraging technology to revolutionize agricultural practices and improve food security.",
    duration: "24:20",
    date: "Jan 27",
    chapters: [
      { title: "Traditional vs Modern Farming", duration: "08:10", startTime: "00:00" },
      { title: "Tech Integration in Agriculture", duration: "08:10", startTime: "08:10" },
      { title: "Success Stories", duration: "08:00", startTime: "16:20" }
    ]
  },
  {
    id: '5',
    title: "Digital Payments Revolution in Ghana",
    channel: "FinTech Focus",
    url: "https://example.com/audio5.mp3",
    thumbnail: "/episode-pic.jpg",
    description: "Examining the explosive growth of mobile money and digital payments in Ghana's financial ecosystem.",
    duration: "26:15",
    date: "Jan 28",
    chapters: [
      { title: "Mobile Money Evolution", duration: "08:45", startTime: "00:00" },
      { title: "Market Dynamics", duration: "08:45", startTime: "08:45" },
      { title: "Future Trends", duration: "08:45", startTime: "17:30" }
    ]
  }
];

export default function MarketplacePage() {
  const router = useRouter();
  const [currentTrack, setCurrentTrack] = useState<Track>(SAMPLE_TRACKS[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null);

  const handlePlay = (track: Track) => {
    setCurrentTrack(track);
    setShowSidebar(true);
  };

  const navigateToEpisode = (track: Track) => {
    router.push(`/EpisodeDetail/${track.id}`);
  };

  const handleTrackEnd = () => {
    const currentIndex = SAMPLE_TRACKS.findIndex(track => track.id === currentTrack.id);
    const nextTrack = SAMPLE_TRACKS[(currentIndex + 1) % SAMPLE_TRACKS.length];
    setCurrentTrack(nextTrack);
  };

  const handleCardClick = (e: React.MouseEvent, track: Track) => {
    if ((e.target as HTMLElement).closest('.play-button')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    navigateToEpisode(track);
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
            className="absolute right-0 bottom-0 bg-white pl-2 text-[#FF4000] text-sm hover:text-[#FF4000]/80"
          >
            {expandedDescription === track.id ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    );
  };

  const renderRecommendedCard = (track: Track) => (
    <div 
      key={track.id} 
      className="relative bg-[#FF4000] text-white rounded-lg overflow-hidden cursor-pointer"
      onClick={(e) => handleCardClick(e, track)}
    >
      <div className="relative aspect-[16/9] w-full">
        <img 
          src={track.thumbnail}
          alt={track.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4000]/50 to-[#FF4000]"></div>
        
        <div className="absolute inset-0 p-6 flex flex-col">
          <div className="mb-auto">
            <p className="text-sm text-white/80 mb-3">Episode • {track.channel}</p>
            <h2 className="text-xl font-bold leading-tight min-h-[3.5rem] line-clamp-2 hover:underline">
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
              onClick={(e) => {
                e.stopPropagation();
                handlePlay(track);
              }}
              className="play-button w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors group"
            >
              <Play className="w-5 h-5 text-[#FF4000] group-hover:text-[#FF4000]/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPopularCard = (track: Track) => (
    <div 
      key={track.id} 
      className="bg-white rounded-lg shadow p-4 cursor-pointer"
      onClick={(e) => handleCardClick(e, track)}
    >
      <div className="aspect-square bg-gray-100 rounded-md mb-2 overflow-hidden">
        <img 
          src={track.thumbnail}
          alt={track.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold truncate hover:underline">{track.title}</h3>
      <p className="text-sm text-gray-600 truncate">{track.channel}</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handlePlay(track);
        }}
        className="play-button mt-2 w-8 h-8 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg"
      >
        <Play className="w-4 h-4" />
      </button>
    </div>
  );

  const renderNewArrivalCard = (track: Track) => (
    <div 
      key={track.id} 
      className="flex items-center gap-4 bg-white rounded-lg shadow p-4 cursor-pointer"
      onClick={(e) => handleCardClick(e, track)}
    >
      <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={track.thumbnail}
          alt={track.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold truncate hover:underline">{track.title}</h3>
        <p className="text-sm text-gray-600 truncate">{track.channel}</p>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handlePlay(track);
        }}
        className="play-button w-8 h-8 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg"
      >
        <Play className="w-4 h-4" />
      </button>
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
              {SAMPLE_TRACKS.slice(0, 3).map(track => renderPopularCard(track))}
            </div>
          </div>

          {/* New Arrivals Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
            <div className="space-y-4">
              {SAMPLE_TRACKS.slice(0, 3).map(track => renderNewArrivalCard(track))}
            </div>
          </div>
        </div>

        {/* Right Column - Current Episode */}
        <div className={`fixed md:relative md:w-1/3 inset-y-0 right-0 w-full md:translate-x-0 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'} bg-[#FEEFDD] border-l border-gray-200 z-40 overflow-y-auto`}>
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
                <img 
                  src={currentTrack.thumbnail}
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
                {currentTrack.chapters.map((chapter, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Play className="w-4 h-4" />
                    <span className="flex-1">{chapter.title}</span>
                    <span className="text-gray-500">{chapter.startTime}</span>
                  </div>
                ))}
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
          onTrackChange={(track) => setCurrentTrack(track)}
        />
      </div>
    </div>
  );
}