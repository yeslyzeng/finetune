// marketplace/components/AudioPlayer/index.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AudioPlayerProps } from './types';
import { useAudio } from '../../hooks/useAudio';
import { formatTime } from '../../utils/format';

const defaultTrack = {
  id: '',
  title: '',
  channel: '',
  url: '',
  thumbnail: '/episode-pic.jpg',
  description: '',
  duration: '',
  date: '',
  chapters: []
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  currentTrack = defaultTrack, 
  onTrackEnd,
  onTrackChange 
}) => {
  const router = useRouter();
  const {
    audioRef,
    audioState,
    togglePlay,
    setTime,
    setVolume,
    handleTimeUpdate,
    handleLoadedMetadata,
  } = useAudio(currentTrack);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    setTime(clickPosition * audioState.duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const navigateToChannel = (e: React.MouseEvent, channel: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/ChannelDetail/${channel}`);
  };

  if (!currentTrack?.url) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={onTrackEnd}
        src={currentTrack.url}
      />

      <div className="h-20 border-t border-gray-200 bg-white flex items-center px-6 sticky bottom-0">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src={currentTrack.thumbnail || '/episode-pic.jpg'} 
                alt={currentTrack.title || 'Track thumbnail'}
                fill
                className="object-cover rounded"
                sizes="48px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/episode-pic.jpg';
                }}
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">{currentTrack.title}</h4>
            <button
              onClick={(e) => navigateToChannel(e, currentTrack.channel)}
              className="text-sm text-gray-600 hover:text-[#FF4000] hover:underline"
            >
              {currentTrack.channel}
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button 
              className="w-5 h-5 text-gray-600 hover:text-gray-900"
              onClick={() => onTrackChange?.(currentTrack)} // Placeholder for previous track
            >
              <SkipBack />
            </button>
            <button 
              className="w-8 h-8 bg-[#FF4000] text-white rounded-full flex items-center justify-center hover:bg-[#FF4000]/90"
              onClick={togglePlay}
            >
              {audioState.isPlaying ? 
                <Pause className="w-5 h-5" /> : 
                <Play className="w-5 h-5" />
              }
            </button>
            <button 
              className="w-5 h-5 text-gray-600 hover:text-gray-900"
              onClick={() => onTrackChange?.(currentTrack)} // Placeholder for next track
            >
              <SkipForward />
            </button>
          </div>
          <div className="w-full max-w-md mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {formatTime(audioState.currentTime)}
            </span>
            <div 
              className="flex-1 h-1 bg-gray-200 rounded-full cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-[#FF4000] rounded-full relative"
                style={{ width: `${(audioState.currentTime / audioState.duration) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <span className="text-xs text-gray-500">
              {formatTime(audioState.duration)}
            </span>
          </div>
        </div>

        <div className="w-1/3 flex justify-end items-center gap-2">
          <Volume2 className="w-5 h-5 text-gray-600" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={audioState.volume}
            onChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;