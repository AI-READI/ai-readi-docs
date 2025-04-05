import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer relative', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}

        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 inset-x-0 z-50 w-screen bg-sky300 p-2 text-center text-sm text-gray-900 max-sm:bottom-2">
        This repository is under review for potential modification in compliance with Administration
        directives.
      </div>
    </footer>
  );
}
