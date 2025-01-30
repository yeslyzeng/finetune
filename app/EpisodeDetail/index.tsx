// app/EpisodeDetail/index.tsx
import React, { useState } from 'react';
import { Search, ChevronLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { EpisodeDetailProps } from './types';
import EpisodeHeader from './components/EpisodeHeader';
import ChaptersList from './components/ChaptersList';
import PlayerSidebar from './components/PlayerSidebar';

const AudioPlayer = dynamic(() => import('../marketplace/components/AudioPlayer'), { ssr: false });

const EpisodeDetail: React.FC<EpisodeDetailProps> = ({ 
  initialTrack,
  onBack 
}) => {
  const router = useRouter();
  const [currentTrack, setCurrentTrack] = useState(initialTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    setShowSidebar(true);
  };

  const handleChapterClick = (startTime: string) => {
    if (!currentTrack) return;
    // Convert startTime (HH:MM:SS) to seconds for seeking
    const [hours, minutes, seconds] = startTime.split(':').map(Number);
    const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds;
    // You'll need to implement the actual seeking logic here
  };

  const handleTrackEnd = () => {
    setIsPlaying(false);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.push('/marketplace'); // Default fallback
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#FEEFDD]">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column */}
        <div className="w-2/3 overflow-y-auto p-8">
          <div className="mb-6 flex items-center gap-4">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search episodes..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <EpisodeHeader 
            track={currentTrack}
            onPlay={handlePlay}
            isPlaying={isPlaying}
          />
          
          <ChaptersList 
            chapters={currentTrack.chapters}
            onChapterClick={handleChapterClick}
            transcript={currentTrack.transcript}
          />
        </div>

        {/* Right Sidebar */}
        <PlayerSidebar 
          track={currentTrack}
          isOpen={showSidebar}
          onChapterClick={handleChapterClick}
        />
      </div>

      {/* Audio Player */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 z-50">
        <AudioPlayer
          currentTrack={currentTrack}
          onTrackEnd={handleTrackEnd}
          onTrackChange={(track) => {
            setCurrentTrack(track);
            setIsPlaying(true);
          }}
        />
      </div>
    </div>
  );
};

export default EpisodeDetail;