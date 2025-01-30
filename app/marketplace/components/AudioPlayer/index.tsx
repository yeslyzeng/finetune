// marketplace/components/AudioPlayer/index.tsx
'use client';
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { AudioPlayerProps } from './types';
import { useAudio } from '../../hooks/useAudio';
import { formatTime } from '../../utils/format';

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  currentTrack, 
  onTrackEnd,
  onTrackChange 
}) => {
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

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => onTrackEnd?.()}
        src={currentTrack.url}
      />

      <div className="h-20 border-t border-gray-200 bg-white flex items-center px-6 sticky bottom-0">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
            <img 
              src={currentTrack.thumbnail || '/episode-pic.jpg'} 
              alt={currentTrack.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h4 className="font-semibold">{currentTrack.title}</h4>
            <p className="text-sm text-gray-600">{currentTrack.channel}</p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button 
              className="w-5 h-5 text-gray-600 hover:text-gray-900"
              onClick={() => onTrackChange?.(currentTrack)} // 实际应用中需要获取上一首
            >
              <SkipBack />
            </button>
            <button 
              className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-80"
              onClick={togglePlay}
            >
              {audioState.isPlaying ? 
                <Pause className="w-5 h-5" /> : 
                <Play className="w-5 h-5" />
              }
            </button>
            <button 
              className="w-5 h-5 text-gray-600 hover:text-gray-900"
              onClick={() => onTrackChange?.(currentTrack)} // 实际应用中需要获取下一首
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
                className="h-full bg-primary rounded-full relative"
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