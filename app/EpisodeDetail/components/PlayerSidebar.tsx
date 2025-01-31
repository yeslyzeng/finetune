// EpisodeDetail/components/PlayerSidebar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { PlayerSidebarProps } from '@/app/EpisodeDetail/types';

// EpisodeDetail/components/PlayerSidebar.tsx
const PlayerSidebar: React.FC<PlayerSidebarProps> = ({ track, isOpen, onChapterClick }) => {
  const router = useRouter();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const navigateToChannel = (e: React.MouseEvent, channel: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/ChannelDetail/${channel}`);
  };

  // 添加空值检查
  if (!track) {
    return null;
  }

  return (
    <div className={`fixed md:relative md:w-1/3 inset-y-0 right-0 w-full md:translate-x-0 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#FEEFDD] border-l border-gray-200 z-40 overflow-y-auto`}>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="mb-4">
            <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
              <div className="relative w-full h-full">
              <Image 
                src={track?.thumbnail || "/episode-pic.jpg"}
                alt={track?.title || "Episode thumbnail"}
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
            <button
              onClick={(e) => track?.channel && navigateToChannel(e, track.channel)}
              className="text-sm text-gray-600 hover:text-[#FF4000] hover:underline mb-1"
            >
              Episode • {track?.channel}
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-2">{track?.title}</h2>
          <div className="flex items-center text-sm text-gray-600 space-x-2 mb-4">
            <span>{track?.date}</span>
            <span>•</span>
            <span>{track?.duration}</span>
          </div>
          <div className="bg-gray-50 rounded-md p-4 mb-4">
            <p className={`text-gray-600 ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}>
              {track?.description}
            </p>
            {track?.description && track.description.length > 150 && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-[#FF4000] hover:text-[#FF4000]/80 mt-2"
              >
                {isDescriptionExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Chapters</h3>
            <div className="space-y-2">
              {track?.chapters?.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => onChapterClick?.(chapter.startTime)}
                  className="w-full flex items-center gap-2 text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span className="flex-1 text-left">{chapter.title}</span>
                  <span className="text-gray-500">{chapter.startTime}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSidebar;