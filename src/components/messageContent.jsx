/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function MessageContent({ content }) {
  const lines = content.split('\n').filter((line) => line.trim() !== '');
  const elements = [];
  let bulletGroup = [];

  lines.forEach((line, i) => {
    if (line.startsWith('- ') || line.startsWith('• ')) {
      bulletGroup.push(
        <li key={i} className="ml-1">
          {line.slice(2)}
        </li>,
      );
    } else {
      if (bulletGroup.length) {
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-4 my-1 space-y-0.5">
            {bulletGroup}
          </ul>,
        );
        bulletGroup = [];
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-semibold m-0">
            {line.slice(2, -2)}
          </p>,
        );
      } else {
        elements.push(
          <p key={i} className="m-0">
            {line}
          </p>,
        );
      }
    }
  });

  if (bulletGroup.length) {
    elements.push(
      <ul key="ul-end" className="list-disc pl-4 my-1 space-y-0.5">
        {bulletGroup}
      </ul>,
    );
  }

  return <div className="space-y-1">{elements}</div>;
}

MessageContent.propTypes = {
  content: PropTypes.string.isRequired,
};
