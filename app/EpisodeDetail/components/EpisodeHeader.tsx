// app/EpisodeDetail/components/EpisodeHeader.tsx
import React, { useState } from 'react';
import { Play, Pause, Share, Download } from 'lucide-react';
import type { EpisodeHeaderProps } from '@/app/EpisodeDetail/types';

const EpisodeHeader: React.FC<EpisodeHeaderProps> = ({ track, onPlay, isPlaying }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex gap-6">
        <div className="w-64 h-64 rounded-lg overflow-hidden">
        <img
          src={track.thumbnail ? track.thumbnail : "/episode-pic.jpg"}
          alt={track.title}
          className="w-full h-full object-cover"
        />

        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{track.title}</h1>
              <p className="text-gray-600 mb-2">{track.channel}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{track.date}</span>
                <span>•</span>
                <span>{track.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <button 
              onClick={onPlay}
              className="w-12 h-12 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button className="w-12 h-12 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg">
              <Share className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg">
              <Download className="w-6 h-6" />
            </button>
          </div>

          <div className="prose max-w-none">
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
        </div>
      </div>
    </div>
  );
};

export default EpisodeHeader;