'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Track } from '@/app/marketplace/components/AudioPlayer/types';
import EpisodeDetail from '@/app/EpisodeDetail'; 

// 获取指定ID的track
const getTrackById = (id: string): Track => {
  const SAMPLE_TRACKS: Track[] = [
    {
      id: '1',
      title: "Revolutionizing African Finance: The Fingo Africa Story with Kolento",
      channel: "Fingo Africa",
      url: "https://example.com/audio1.mp3",
      thumbnail: "/episode-pic.jpg",
      description: "In this episode of our podcast, host Jack sits down with Kolento, the visionary founder of Fingo Africa...",
      duration: "23:14",
      date: "Jan 24",
      chapters: [
        { title: "The Vision Behind Fingo", duration: "03:45", startTime: "00:00" },
        { title: "African Financial Landscape", duration: "04:45", startTime: "03:46" },
        { title: "Product Innovation & Technology", duration: "04:44", startTime: "08:31" },
        { title: "Growth & Performance", duration: "04:29", startTime: "13:16" },
        { title: "Business Model & Future Plans", duration: "04:44", startTime: "17:46" },
        { title: "Market Strategy & Closing Thoughts", duration: "04:29", startTime: "22:31" }
      ]
    }
  ];
  
  return SAMPLE_TRACKS.find(track => track.id === id) || SAMPLE_TRACKS[0];
};

export default function EpisodePage() {
  const router = useRouter();
  const params = useParams();
  const track = getTrackById(params.id as string);

  return (
    <EpisodeDetail 
      initialTrack={track}
      onBack={router.back}
    />
  );
}