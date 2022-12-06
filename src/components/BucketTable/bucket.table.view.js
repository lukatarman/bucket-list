import { Table } from "react-bootstrap";
import BucketTableBehavior from "./bucket.table.behavior.js";
import BucketTableItem from "../BucketTableItem/bucket.table.item.js";

const BucketTable = () => {
  const [tableResults, handleTableItemClick] = BucketTableBehavior();

  const tableRender = tableResults.map((result, index) => {
    return (
      <BucketTableItem
        key={index}
        item={result}
        index={index}
        handleTableItemClick={handleTableItemClick}
      />
    );
  });

  return (
    <Table borderless hover>
      <thead>
        <tr className="table-row-bordered">
          <th width="70%" className="table-head-content">
            Name
          </th>
          <th className="table-head-content">Location</th>
        </tr>
      </thead>
      {tableRender}
    </Table>
  );
};

export default BucketTable;
