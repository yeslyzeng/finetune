// app/EpisodeDetail/components/PlayerSidebar.tsx
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import type { PlayerSidebarProps } from '@/app/EpisodeDetail/types';

const PlayerSidebar: React.FC<PlayerSidebarProps> = ({ track, isOpen, onChapterClick }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className={`fixed md:relative md:w-1/3 inset-y-0 right-0 w-full md:translate-x-0 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#FEEFDD] border-l border-gray-200 z-40 overflow-y-auto`}>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
            <img 
              src={track.thumbnail || "/episode-pic.jpg"}
              alt={track.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm opacity-80">Episode • {track.channel}</p>
          </div>
          <h2 className="text-xl font-semibold mb-2">{track.title}</h2>
          <div className="flex items-center text-sm text-gray-600 space-x-2 mb-4">
            <span>{track.date}</span>
            <span>•</span>
            <span>{track.duration}</span>
          </div>
          <div className="bg-gray-50 rounded-md p-4 mb-4">
            <p className={`text-gray-600 ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}>
              {track.description}
            </p>
            {track.description.length > 150 && (
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
              {track.chapters.map((chapter, index) => (
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