import { useEffect } from 'react';

function DirectFileProcessingTable() {
  useEffect(() => {
    // Open OMOP Table in a new tab
    window.open('/fileProcessingTable', '_blank');

    // Redirect the current page to the documentation
    window.location.replace('/docs/2/dataset/wearable-activity-monitor');
  }, []);
}

export default DirectFileProcessingTable;
