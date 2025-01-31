// EpisodeDetail/components/EpisodeHeader.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Pause, Share, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { EpisodeHeaderProps } from '@/app/EpisodeDetail/types';

const EpisodeHeader: React.FC<EpisodeHeaderProps> = ({ track, onPlay, isPlaying }) => {
  const router = useRouter();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const navigateToChannel = (e: React.MouseEvent, channel: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/ChannelDetail/${channel}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex gap-6">
        <div className="w-1/3">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={track.thumbnail || "/episode-pic.jpg"}
              alt={track.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/episode-pic.jpg";
              }}
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{track.title}</h1>
              <button
                onClick={(e) => navigateToChannel(e, track.channel)}
                className="text-gray-600 hover:text-[#FF4000] hover:underline mb-1"
              >
                {track.channel}
              </button>
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