import { useEffect } from 'react';

function DirectOmopTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v3-omopAndClinicalTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/3/dataset/clinical-data/OMOP-Clinical-Data-Structure');
  }, []);
}

export default DirectOmopTable;
