/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';

export default function TallyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = function () {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };
    script.onerror = script.onload;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/wdY71y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="276"
      title="AI-READI Contact Form"
    />
  );
}
