import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bucketListTableResultsState } from "../../contexts/BucketListContext/index.js";
import {
  selectedBucketState,
  visiblePageState,
} from "../../contexts/AppContext/index.js";

const BucketTable = () => {
  const [tableResults, setTableResults] = useRecoilState(bucketListTableResultsState);

  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setTableResults(response.data);
    };

    fetchData();
  }, [setTableResults]);

  const handleTableItemClick = (result, index) => {
    setSelectedBucket({
      name: result.name,
      location: result.location,
      size: result.size,
      index,
    });
    setVisiblePage("my-storage");
  };

  const tableRender = tableResults.map((result, index) => {
    return (
      <tbody key={index}>
        <tr
          className="table-row-content"
          onClick={() => handleTableItemClick(result, index)}
        >
          <td>{result.name}</td>
          <td>{result.location}</td>
        </tr>
      </tbody>
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
