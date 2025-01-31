// app/ChannelDetail/index.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Play, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Channel } from './types';
import ChannelHeader from './components/ChannelHeader';
import TabContent from './components/TabContent';

const AudioPlayer = dynamic(() => import('../marketplace/components/AudioPlayer'), { ssr: false });

interface ChannelDetailProps {
  channel: Channel;
}

const ChannelDetail: React.FC<ChannelDetailProps> = ({ channel }) => {
  const router = useRouter();
  const [currentTrack, setCurrentTrack] = useState(channel.episodes[0]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isEpisodeExpanded, setIsEpisodeExpanded] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleTrackEnd = () => {
    // Handle track end logic
  };

  const navigateToChannel = (e: React.MouseEvent, channel: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/ChannelDetail/${channel}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="h-screen flex flex-col bg-[#FEEFDD]">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column */}
        <div className="w-2/3 overflow-y-auto p-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <ChannelHeader 
            channel={channel}
            onFollow={handleFollow}
            isFollowing={isFollowing}
          />
          
          <TabContent channel={channel} />
        </div>

        {/* Right Sidebar */}
        <div className={`fixed md:relative md:w-1/3 inset-y-0 right-0 w-full md:translate-x-0 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : 'translate-x-full'} bg-[#FEEFDD] border-l border-gray-200 z-40 overflow-y-auto`}>
          <div className="p-6">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src={currentTrack?.thumbnail || "/episode-pic.jpg"}
                    alt={currentTrack?.title || "Episode thumbnail"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/episode-pic.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <button
                  onClick={(e) => currentTrack?.channel && navigateToChannel(e, currentTrack.channel)}
                  className="text-sm opacity-80"
                >
                  Episode • {currentTrack?.channel}
                </button>
              </div>
              <h2 className="text-xl font-semibold mb-2">Revolutionizing African Finance: The Fingo Africa Story with Kolento</h2>
              <div className="flex items-center text-sm text-gray-600 space-x-2 mb-4">
                <span>{currentTrack?.date}</span>
                <span>•</span>
                <span>{currentTrack?.duration}</span>
              </div>
              <div className="bg-gray-50 rounded-md p-4 mb-4">
                <div className="relative">
                  <p className={`text-gray-600 ${!isEpisodeExpanded ? 'line-clamp-2' : ''}`}>
                    In this episode of our podcast, host Jack sits down with Kolento, the visionary founder of Fingo Africa, the first pan-African neobank focused on youth financial empowerment. Discover how this innovative fintech startup is reshaping the banking landscape across Africa.
                  </p>
                  <button 
                    onClick={() => setIsEpisodeExpanded(!isEpisodeExpanded)}
                    className="absolute right-0 bottom-0 bg-gray-50 pl-2 text-[#FF4000] text-sm hover:text-[#FF4000]/80"
                  >
                    {isEpisodeExpanded ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Chapters</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 text-sm hover:bg-gray-50 rounded-lg">
                    <Play className="w-4 h-4" />
                    <span className="flex-1 text-left">The Vision Behind Fingo</span>
                    <span className="text-gray-500">00:00</span>
                  </button>
                  <button className="w-full flex items-center gap-2 text-sm hover:bg-gray-50 rounded-lg">
                    <Play className="w-4 h-4" />
                    <span className="flex-1 text-left">African Financial Landscape</span>
                    <span className="text-gray-500">03:46</span>
                  </button>
                  <button className="w-full flex items-center gap-2 text-sm hover:bg-gray-50 rounded-lg">
                    <Play className="w-4 h-4" />
                    <span className="flex-1 text-left">Business Model & Future Plans</span>
                    <span className="text-gray-500">17:46</span>
                  </button>
                </div>
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
};

export default ChannelDetail;