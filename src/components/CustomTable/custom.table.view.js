import { Table } from "react-bootstrap";
import CustomTableItem from "../CustomTableItem/custom.table.item.js";

const CustomTable = ({ handleTableItemClick, tableValues, firstRowWidth }) => {
  const tableRowsRender = tableValues.rows.map((result, index) => {
    return (
      <CustomTableItem
        key={index}
        items={result}
        index={index}
        handleTableItemClick={handleTableItemClick}
      />
    );
  });

  const tableHeadRender = tableValues.head.map((value, index) => {
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
        <tr className="table-row-bordered">{tableHeadRender}</tr>
      </thead>
      {tableRowsRender}
    </Table>
  );
};

export default CustomTable;
