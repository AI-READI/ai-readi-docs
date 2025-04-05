import React from 'react';
// eslint-disable-next-line import/no-unresolved
import OriginalLayout from '@theme-original/Layout';
import BannerIndex from '../Banner';

export default function Layout(props) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <OriginalLayout {...props} />
      <BannerIndex />
    </>
  );
}
