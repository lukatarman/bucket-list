import { Col, Row, Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import { getBucketList } from "../../adapters/http.client.adapter.js";

const BucketTable = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  displayCreateButton,
  tableResults,
  setTableResults,
  setSelectedBucket,
  setVisiblePage,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getBucketList();
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
      <tbody>
        <tr
          key={index}
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
