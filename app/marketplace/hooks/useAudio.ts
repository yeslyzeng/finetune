// marketplace/hooks/useAudio.ts
'use client';
import { useState, useRef, useEffect } from 'react';
import { AudioState, Track } from '../components/AudioPlayer/types';

export const useAudio = (track: Track) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioState.volume;
    }
  }, [audioState.volume]);

  useEffect(() => {
    setAudioState(prev => ({ ...prev, isPlaying: false, currentTime: 0 }));
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioState.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    
    setAudioState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setAudioState(prev => ({
      ...prev,
      currentTime: audioRef.current?.currentTime || 0
    }));
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setAudioState(prev => ({
      ...prev,
      duration: audioRef.current?.duration || 0
    }));
  };

  const setTime = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setAudioState(prev => ({ ...prev, currentTime: time }));
  };

  const setVolume = (volume: number) => {
    setAudioState(prev => ({ ...prev, volume }));
  };

  return {
    audioRef,
    audioState,
    togglePlay,
    setTime,
    setVolume,
    handleTimeUpdate,
    handleLoadedMetadata,
  };
};