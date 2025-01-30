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
  thumbnail?: string;
  description: string;
  duration: string;
  date: string;
  chapters: Chapter[];
  transcript?: string;  // 添加 transcript 属性
}

export interface Track {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnail?: string;
  description: string;
  duration: string;  // 改为string类型
  date: string;      // 添加date属性
  chapters: Chapter[];
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