import React from 'react';
// eslint-disable-next-line import/no-unresolved
import DocPaginator from '@theme-original/DocPaginator';
// eslint-disable-next-line import/no-unresolved
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function DocPaginatorWrapper(props) {
  const { next, previous } = props;

  const { metadata } = useDoc();
  const id = metadata?.id;

  const excludedPages = ['dataset/overall-description', 'dataset/clinical-data/questionnaires'];

  const showCustomSectionForDataset = id?.startsWith('dataset/') && !excludedPages.includes(id);

  return (
    <>
      <DocPaginator next={next} previous={previous} />

      {showCustomSectionForDataset && (
        <div>
          <p>
            You can explore the{' '}
            <a href="https://github.com/AI-READI/ai-readi-notebooks" target="_blank" rel="noreferrer">
              Example Notebooks
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
