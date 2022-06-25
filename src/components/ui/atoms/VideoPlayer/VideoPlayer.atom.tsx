import React from 'react';
import { DefaultUi, Player, Youtube } from '@vime/react';

import '@vime/core/themes/default.css';

type VideoPlayerProps = {
  videoId: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
};
