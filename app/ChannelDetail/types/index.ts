// app/ChannelDetail/types/index.ts
import type { Track } from '@/app/marketplace/components/AudioPlayer/types';

export interface FundingRound {
  round: string;
  date: string;
  amount?: string;
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  owner: string;
  description: string;
  teamInfo: string;
  valuation?: string;
  fundingNeeded?: string;
  activelyFunding: boolean;
  fundingHistory: FundingRound[];
  followers: number;
  episodes: Track[];
}

export interface ChannelHeaderProps {
  channel: Channel;
  onFollow: () => void;
  isFollowing: boolean;
}

export interface TabContentProps {
  channel: Channel;
}

export interface TimelineProps {
  fundingHistory: FundingRound[];
}

export interface InvestmentTagsProps {
  valuation?: string;
  fundingNeeded?: string;
  activelyFunding: boolean;
}