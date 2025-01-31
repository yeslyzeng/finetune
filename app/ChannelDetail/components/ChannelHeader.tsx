// app/ChannelDetail/components/ChannelHeader.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import type { ChannelHeaderProps } from '../types';

const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channel,
  onFollow,
  isFollowing
}) => {
  return (
    <div className="flex items-start gap-6 mb-8">
      {/* Channel Avatar */}
      <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/episode-pic.jpg"
          alt={channel.name}
          width={160}
          height={160}
          className="object-cover"
          priority
        />
      </div>

      {/* Channel Info */}
      <div className="flex-1 mt-2">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {channel.name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">By {channel.owner}</p>
            <p className="text-base text-gray-500">
              {channel.followers.toLocaleString()} followers
            </p>
          </div>

          <button
            onClick={onFollow}
            className={`px-8 py-3 rounded-full text-base font-medium transition-colors ${
              isFollowing
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-[#FF4000] text-white hover:bg-[#FF4000]/90'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;