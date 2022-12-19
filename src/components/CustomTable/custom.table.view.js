import { Table } from "react-bootstrap";
import CustomTableItem from "../BucketTableItem/bucket.table.item.js";

const CustomTable = ({ handleTableItemClick, tableValues, firstRowWidth }) => {
  const tableItemRender = tableValues.row.map((result, index) => {
    return (
      <CustomTableItem
        key={index}
        items={result}
        handleTableItemClick={handleTableItemClick}
      />
    );
  });

  const tableRender = tableValues.head.map((value, index) => {
    return (
      <th
        key={index}
        width={index === 0 ? firstRowWidth : ""}
        className="table-head-content"
      >
        {value}
      </th>
    );
  });

  return (
    <Table borderless hover>
      <thead>
        <tr className="table-row-bordered">{tableRender}</tr>
      </thead>
      {tableItemRender}
    </Table>
  );
};

export default CustomTable;
