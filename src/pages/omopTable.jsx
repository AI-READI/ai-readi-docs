/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import Layout from '@theme/Layout';

import StructureTable from '../components/StructureTable';

export default function OmopTable() {
  return (
    <Layout title="" description="Documentation for the AI-READI dataset">
      <StructureTable />
    </Layout>
  );
}
