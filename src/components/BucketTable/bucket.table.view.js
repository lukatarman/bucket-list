import BucketTableBehavior from "./bucket.table.behavior.js";

import CustomTable from "../CustomTable/custom.table.view.js";

const BucketTable = () => {
  const [handleTableItemClick, tableValues] = BucketTableBehavior();

  return (
    <CustomTable
      handleTableItemClick={handleTableItemClick}
      tableValues={tableValues}
      firstRowWidth="70%"
    />
  );
};

export default BucketTable;
