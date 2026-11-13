import { useEffect } from 'react';

function DirectDataDomainTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v3-dataDomainTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/3/dataset/clinical-data/clinical-lab-tests');
  }, []);
}

export default DirectDataDomainTable;
