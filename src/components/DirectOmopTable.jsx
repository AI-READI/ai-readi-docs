import React, { useEffect } from 'react';

function DirectOmopTable() {
  useEffect(() => {
    window.open('/omopTable', '_blank');
  }, []);

  return <h2>Redirecting...</h2>;
}

export default DirectOmopTable;
