// marketplace/components/AudioPlayer/types.ts
export interface Chapter {
  title: string;
  duration: string;
  startTime: string;
}

export interface Track {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnail: string;
  description: string;
  duration: string;
  date: string;
  chapters: Chapter[];
  transcript?: string; 
}

export interface AudioPlayerProps {
  currentTrack: Track;
  onTrackEnd?: () => void;
  onTrackChange?: (track: Track) => void;
}

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}