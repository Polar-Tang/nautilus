import React from 'react';
import {LiteYTEmbed} from '@justinribeiro/lite-youtube'

// Register the custom element
if (!customElements.get('lite-youtube')) {
  customElements.define('lite-youtube', LiteYTEmbed);
}

function VideoFrame({videoid}: {videoid: string}) {
  return React.createElement('lite-youtube', {
    videoid: videoid,
  });
}

export default VideoFrame