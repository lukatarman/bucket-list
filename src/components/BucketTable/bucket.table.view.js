import BucketTableBehavior from "./bucket.table.behavior.js";

import CustomTable from "../CustomTable/custom.table.view.js";

const BucketTable = () => {
  const [tableResults, handleTableItemClick] = BucketTableBehavior();

  return (
    <CustomTable
      tableResults={tableResults}
      handleTableItemClick={handleTableItemClick}
    />
  );
};

export default BucketTable;
