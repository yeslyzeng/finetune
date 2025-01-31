// app/ChannelDetail/components/TabContent.tsx
'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { TabContentProps, TimelineProps, InvestmentTagsProps, FundingRound } from '../types';

// About Tab Component
const AboutTab: React.FC<TabContentProps> = ({ channel }) => {
  const [isTeamInfoExpanded, setIsTeamInfoExpanded] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  return (
    <div className="space-y-8">
      {/* Team Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Founding Team</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="relative">
            <p className={`text-gray-600 ${!isTeamInfoExpanded ? 'line-clamp-2' : ''}`}>
              <strong>Kolento &ndash; Founder &amp; CEO of Fingo Africa</strong><br/>
              Kolento is the visionary founder of Fingo Africa, the first pan-African neobank designed for the youth. With a mission to redefine banking, he is dedicated to making financial services more accessible, affordable, and user-friendly. Under his leadership, Fingo is driving financial inclusion across Africa through digital innovation, strategic partnerships, and a deep understanding of young consumers&apos; needs.
            </p>
            <button 
              onClick={() => setIsTeamInfoExpanded(!isTeamInfoExpanded)}
              className="absolute right-0 bottom-0 bg-gray-50 pl-2 text-[#FF4000] text-sm hover:text-[#FF4000]/80"
            >
              {isTeamInfoExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>

      {/* Channel Description */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Channel Description</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="relative">
            <p className={`text-gray-600 ${!isDescriptionExpanded ? 'line-clamp-2' : ''}`}>
              Follow us as we explore the dynamic world of fintech in Africa, featuring interviews with industry leaders, discussions on financial inclusion, and insights into how Fingo Africa is revolutionizing banking for the next generation. Our channel brings you compelling stories of innovation, transformation, and the future of financial services across the continent. Join us on this journey as we share the challenges, triumphs, and groundbreaking solutions that are shaping Africa&apos;s financial landscape.
            </p>
            <button 
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="absolute right-0 bottom-0 bg-gray-50 pl-2 text-[#FF4000] text-sm hover:text-[#FF4000]/80"
            >
              {isDescriptionExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </div>

      {/* Investment Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Investment Info</h3>
        <InvestmentTags
          valuation={channel.valuation}
          fundingNeeded={channel.fundingNeeded}
          activelyFunding={channel.activelyFunding}
        />
      </div>

      {/* Funding Timeline */}
      <Timeline fundingHistory={channel.fundingHistory} />
    </div>
  );
};

// Episodes Tab Component
const EpisodesTab: React.FC<TabContentProps> = ({ channel }) => {
  const router = useRouter();
  
  // Original episodes data restored
  const episodes = [
    {
      id: '1',
      title: "Revolutionizing African Finance: The Fingo Africa Story with Kolento",
      date: "Jan 24",
      duration: "23:14",
      description: "In this episode of our podcast, host Jack sits down with Kolento, the visionary founder of Fingo Africa, the first pan-African neobank focused on youth financial empowerment. Discover how this innovative fintech startup is reshaping the banking landscape across Africa."
    },
    {
      id: '2',
      title: "Innovation in Digital Banking: Building Trust and Engagement",
      date: "Jan 25",
      duration: "25:30",
      description: "Explore how Fingo Africa is revolutionizing digital banking through innovative technologies and user-centric design. Learn about their strategies for building trust and engaging young users across the continent."
    },
    {
      id: '3',
      title: "Financial Inclusion: Bridging the Gap in African Markets",
      date: "Jan 26",
      duration: "28:45",
      description: "A deep dive into how Fingo Africa is addressing financial inclusion challenges across Africa, discussing innovative solutions for unbanked populations and emerging market opportunities."
    },
    {
      id: '4',
      title: "The Future of African Fintech: Scaling Across Borders",
      date: "Jan 27",
      duration: "24:20",
      description: "Join us as we discuss Fingo Africa's expansion plans, cross-border payment solutions, and their vision for the future of financial services in Africa."
    }
  ];

  const navigateToEpisode = (episodeId: string) => {
    router.push(`/EpisodeDetail/${episodeId}`);
  };

  return (
    <div className="space-y-4">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => navigateToEpisode(episode.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-lg hover:text-[#FF4000] transition-colors">
                {episode.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span>{episode.date}</span>
                <span>•</span>
                <span>{episode.duration}</span>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Handle play button click
              }}
              className="w-10 h-10 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg"
            >
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Related Tab Component
const RelatedTab: React.FC<TabContentProps> = ({ channel }) => {
  const router = useRouter();
  const navigateToEpisode = (episodeId: string) => {
    router.push(`/EpisodeDetail/${episodeId}`);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle play functionality
  };

  const navigateToChannel = (e: React.MouseEvent, channelName: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/ChannelDetail/${channelName}`);
  };

  const relatedEpisodes = [
    {
      id: '1',
      title: "Digital Payments Revolution in Ghana",
      channel: "FinTech Focus",
      duration: "26:15",
      date: "Jan 28",
      thumbnail: "/episode-pic.jpg"
    },
    {
      id: '2',
      title: "Sustainable Agriculture Tech in Rwanda",
      channel: "AgriTech Today",
      duration: "24:20",
      date: "Jan 27",
      thumbnail: "/episode-pic.jpg"
    },
    {
      id: '3',
      title: "Healthcare Innovation in Nigeria",
      channel: "HealthTech Africa",
      duration: "28:45",
      date: "Jan 26",
      thumbnail: "/episode-pic.jpg"
    }
  ];

  return (
    <div className="space-y-4">
      {relatedEpisodes.map(episode => (
        <div 
          key={episode.id} 
          className="flex items-center gap-4 bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => navigateToEpisode(episode.id)}
        >
          <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
            <Image 
              src={episode.thumbnail}
              alt={episode.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 64px"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/episode-pic.jpg';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate hover:text-[#FF4000]">{episode.title}</h3>
            <button 
              onClick={(e) => navigateToChannel(e, episode.channel)}
              className="text-sm text-gray-600 hover:text-[#FF4000] hover:underline block"
            >
              {episode.channel}
            </button>
          </div>
          <button 
            onClick={handlePlay}
            className="w-8 h-8 bg-white text-[#FF4000] rounded-full flex items-center justify-center hover:bg-gray-50 shadow-lg"
          >
            <Play className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

// Main TabContent Component
const TabContent: React.FC<TabContentProps> = ({ channel }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'episodes' | 'related'>('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'episodes':
        return <EpisodesTab channel={channel} />;
      case 'related':
        return <RelatedTab channel={channel} />;
      default:
        return <AboutTab channel={channel} />;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {['about', 'episodes', 'related'].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 text-sm font-medium ${
              activeTab === tab
                ? 'text-[#FF4000] border-b-2 border-[#FF4000]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

// Sub-components
const Timeline: React.FC<TimelineProps> = ({ fundingHistory }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Funding Timeline</h3>
      <div className="relative pt-4">
        <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200" />
        <div className="relative flex justify-between">
          {fundingHistory.map((round: FundingRound, index: number) => (
            <div key={index} className="relative text-center" style={{ flexBasis: '100px' }}>
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF4000]" />
              <div className="pt-4">
                <p className="font-medium text-gray-900">{round.round}</p>
                <p className="text-sm text-gray-500">{round.date}</p>
                {round.amount && (
                  <p className="text-sm text-gray-600">{round.amount}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InvestmentTags: React.FC<InvestmentTagsProps> = ({
  valuation,
  fundingNeeded,
  activelyFunding
}) => {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {valuation && (
        <span className="px-4 py-2 bg-[#FF4000]/10 text-[#FF4000] rounded-full text-sm">
          Valuation: {valuation}
        </span>
      )}
      {fundingNeeded && (
        <span className="px-4 py-2 bg-[#FF4000]/10 text-[#FF4000] rounded-full text-sm">
          Funding Needed: {fundingNeeded}
        </span>
      )}
      {activelyFunding && (
        <span className="px-4 py-2 bg-[#FF4000]/10 text-[#FF4000] rounded-full text-sm">
          Actively Funding
        </span>
      )}
    </div>
  );
};

export default TabContent;