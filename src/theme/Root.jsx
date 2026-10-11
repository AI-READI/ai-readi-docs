/* eslint-disable react/prop-types */
import React from 'react';
import ChatBox from '../components/ChatBox';

function Root({ children }) {
  return (
    <>
      {children}
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <ChatBox />
    </>
  );
}

export default Root;
