import React from 'react';

// eslint-disable-next-line react/prop-types
export default function OptimizedImage({ src, alt }) {
  return (
    <p>
      <img data-blink-src={src} alt={alt} />
    </p>
  );
}
