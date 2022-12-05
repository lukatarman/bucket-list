import { Col, Row, Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  bucketListTableResultsState,
  displayCreateBucketState,
} from "../../contexts/BucketListContext/index.js";
import { selectedBucketState } from "../../contexts/AppContext/index.js";
import { visiblePageState } from "../../contexts/AppContext/index.js";

const BucketTable = () => {
  const [tableResults, setTableResults] = useRecoilState(bucketListTableResultsState);
  const [displayCreateButton, setDisplayCreateButton] = useRecoilState(
    displayCreateBucketState
  );
  const setDisplayCreateBucket = useSetRecoilState(displayCreateBucketState);
  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setTableResults(response.data);
    };

    fetchData();
  }, [setTableResults]);

  const onButtonClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
  };

  const showButton = () => {
    return (
      <Button className="py-0" variant="custom" type="button" onClick={onButtonClick}>
        Create New Bucket
      </Button>
    );
  };

  const tableRender = tableResults.map((result, index) => {
    return (
      <tbody key={index}>
        <tr
          className="table-row-content"
          onClick={() => {
            setSelectedBucket({
              name: result.name,
              location: result.location,
              size: result.size,
              index,
            });
            setVisiblePage("my-storage");
          }}
        >
          <td>{result.name}</td>
          <td>{result.location}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="p-3 bg-white">
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <div>All Buckets ({tableResults.length})</div>
        </Col>
        <Col className="d-flex justify-content-end">
          {displayCreateButton ? showButton() : null}
        </Col>
      </Row>
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
    </div>
  );
};

export default BucketTable;
