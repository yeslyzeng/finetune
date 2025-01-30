// app/EpisodeDetail/types/index.ts
import type { Track as MarketplaceTrack } from '@/app/marketplace/components/AudioPlayer/types';

export type Track = MarketplaceTrack;

export interface Chapter {
  title: string;
  duration: string;
  startTime: string;
}

export interface ChaptersListProps {
  chapters: Chapter[];
  onChapterClick: (startTime: string) => void;
  transcript?: string;
}

export interface EpisodeHeaderProps {
  track: Track;
  onPlay: () => void;
  isPlaying: boolean;
}

export interface PlayerSidebarProps {
  track: Track;
  isOpen: boolean;
  onChapterClick?: (startTime: string) => void;
}

export interface EpisodeDetailProps {
  initialTrack: Track;
  onBack?: () => void;
}