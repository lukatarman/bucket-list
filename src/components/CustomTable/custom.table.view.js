import { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { selectedFileList } from "../../contexts/MyStorageContext/index.js";
import CustomTableItem from "../CustomTableItem/custom.table.item.js";

const CustomTable = ({
  handleTableItemClick,
  tableValues,
  firstRowWidth,
  variation = false,
}) => {
  const setSelectedFileIndex = useSetRecoilState(selectedFileList);

  const tableRef = useRef();
  const tableVariationRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      const isButtonOrFileType = e.target.type === "button" || e.target.type === "file";

      if (!tableVariationRef.current) return;
      if (tableVariationRef.current.contains(e.target)) return;
      if (isButtonOrFileType) return;
      setSelectedFileIndex(null);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const tableRowsRender = tableValues.rows.map((result, index) => {
    const lastIndex = tableValues.rows.length - 1;

    return (
      <CustomTableItem
        key={index}
        items={result}
        index={index}
        handleTableItemClick={handleTableItemClick}
        variation={variation}
        lastIndex={lastIndex}
      />
    );
  });

  const tableHeadRender = tableValues.head.map((value, index) => {
    return (
      <th key={index} width={index === 0 ? firstRowWidth : ""} className="py-1">
        {value}
      </th>
    );
  });

  return (
    <Table
      className="mb-0"
      borderless={!variation}
      hover
      ref={variation ? tableVariationRef : tableRef}
    >
      <thead>
        <tr className="border border-dark bg-secondary text-white">{tableHeadRender}</tr>
      </thead>
      <tbody className="border border-dark mb-5" role={variation ? "" : "button"}>
        {tableRowsRender}
      </tbody>
    </Table>
  );
};

export default CustomTable;
