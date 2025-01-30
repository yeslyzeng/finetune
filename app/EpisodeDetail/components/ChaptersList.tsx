// app/EpisodeDetail/components/ChaptersList.tsx
import React from 'react';
import { Play } from 'lucide-react';
import type { ChaptersListProps, Chapter } from '@/app/EpisodeDetail/types';
import type { Track } from '@/app/marketplace/components/AudioPlayer/types';

const ChaptersList: React.FC<ChaptersListProps> = ({ chapters, onChapterClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Chapters</h2>
        <div className="flex gap-2">
          <button className="text-sm text-[#FF4000] hover:text-[#FF4000]/80">
            Highlight
          </button>
          <button className="text-sm text-[#FF4000] hover:text-[#FF4000]/80">
            Podcast Script
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <button 
            key={index}
            onClick={() => onChapterClick(chapter.startTime)}
            className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg group transition-colors"
          >
            <Play className="w-4 h-4 text-gray-400 group-hover:text-[#FF4000]" />
            <span className="text-gray-500 min-w-[60px]">{chapter.startTime}</span>
            <span className="flex-1 text-left font-medium">{chapter.title}</span>
            <span className="text-gray-500">{chapter.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChaptersList;