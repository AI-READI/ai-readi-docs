import { useEffect } from 'react';

function DirectFileProcessingTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/v4-fileProcessingTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/4/dataset/wearable-activity-monitor');
  }, []);
}

export default DirectFileProcessingTable;
