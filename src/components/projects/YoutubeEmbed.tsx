'use client';

import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface Props {
  videoId: string;
  title: string;
  aspectWidth?: number;
  aspectHeight?: number;
}

export const YouTubeEmbed = ({
  videoId,
  title,
  aspectWidth = 16,
  aspectHeight = 9,
}: Props) => {
  return (
    <div className='mx-auto w-full max-w-4xl'>
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        aspectWidth={aspectWidth}
        aspectHeight={aspectHeight}
        poster='maxresdefault' // 썸네일 화질: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault'
      />
    </div>
  );
};
