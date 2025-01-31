'use client';

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Channel } from '../types';
import ChannelDetail from '..';

// 动态导入 AudioPlayer
const AudioPlayer = dynamic(() => import('../../marketplace/components/AudioPlayer'), { 
  ssr: false,
  loading: () => <div className="h-20 bg-white border-t border-gray-200"></div>
});

// Mock data - 确保包含完整的 episodes 数据
const getChannelById = (id: string): Channel => {
  const SAMPLE_CHANNEL: Channel = {
    id: '1',
    name: 'Fingo Africa Channel',
    avatar: '/channel-avatar.jpg',
    owner: 'Fingo Team',
    description: 'A channel dedicated to African fintech innovation and startup stories.',
    teamInfo: 'Founded by experienced entrepreneurs and fintech experts...',
    valuation: '$50M',
    fundingNeeded: '$10M',
    activelyFunding: true,
    fundingHistory: [
      { round: 'Seed', date: '2023.01', amount: '$2M' },
      { round: 'Pre-A', date: '2023.06', amount: '$5M' },
      { round: 'A', date: '2023.12', amount: '$10M' }
    ],
    followers: 1200,
    episodes: [
      {
        id: '1',
        title: "Sample Episode",
        channel: "Fingo Africa",
        url: "https://example.com/audio1.mp3",
        thumbnail: "/episode-pic.jpg",
        description: "Sample episode description",
        duration: "23:14",
        date: "Jan 24",
        chapters: []
      }
    ]
  };

  return SAMPLE_CHANNEL;
};

export default function ChannelPage() {
  const params = useParams();
  const channel = getChannelById(params.id as string);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChannelDetail channel={channel} />
    </Suspense>
  );
}