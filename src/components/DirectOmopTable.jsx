import { useEffect } from 'react';

function DirectOmopTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v2-omopTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/2/dataset/clinical-data/OMOP-Clinical-Data-Structure');
  }, []);
}

export default DirectOmopTable;
