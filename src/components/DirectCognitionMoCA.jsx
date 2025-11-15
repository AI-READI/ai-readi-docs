import { useEffect } from 'react';

function DirectCognitionMoCA() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v3-cognitionMoCATable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/3/dataset/clinical-data/cognition-MoCA');
  }, []);
}

export default DirectCognitionMoCA;
