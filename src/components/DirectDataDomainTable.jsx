import { useEffect } from 'react';

function DirectDataDomainTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v4-dataDomainTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/4/dataset/clinical-data/clinical-lab-tests');
  }, []);
}

export default DirectDataDomainTable;
