/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function FairPrinciples() {
  return (
    <html lang="en">
      <body>
        <div>
          <table>
            <tr>
              <th> FAIR Principles </th>
              <th>Interpretation </th>
              <th> Compliance by the AI-READI dataset</th>
            </tr>
            <tr>
              <td className="align-top">
                {' '}
                F1. (Meta)data are assigned a globally unique and persistent identifier.{' '}
              </td>
              <td>
                {' '}
                This principle can be fulfilled by sharing data and metadata on a repository that
                provides a digital object identifier (DOI) or another similar globally unique and
                persistent identifier for your dataset. Globally unique here means that the
                identifier is guaranteed to unambiguously refer to exactly one resource in the
                world. Persistent means never reused in another context, and continues to identify
                the same resource, even if that resource no longer exists, or moves.{' '}
              </td>
              <td className="align-top">
                {' '}
                The AI-READI dataset is shared on fairhub.io, which provides a DOI for the dataset (
                <a href="https://doi.org/10.60775/fairhub.1">https://doi.org/10.60775/fairhub.1</a>)
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default FairPrinciples;
