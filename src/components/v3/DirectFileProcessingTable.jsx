import { useEffect } from 'react';

function DirectFileProcessingTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v3-fileProcessingTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/3/dataset/wearable-activity-monitor');
  }, []);
}

export default DirectFileProcessingTable;
