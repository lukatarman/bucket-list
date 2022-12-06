import { Container } from "react-bootstrap";
import { Col, Row, Button } from "react-bootstrap";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  bucketListTableResultsState,
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext/index.js";

const BucketList = () => {
  const displayCreateBucket = useRecoilValue(displayCreateBucketState);
  const displayCreateButton = useRecoilValue(displayCreateButtonState);
  const tableResults = useRecoilValue(bucketListTableResultsState);
  const setDisplayCreateButton = useSetRecoilState(displayCreateButtonState);
  const setDisplayCreateBucket = useSetRecoilState(displayCreateBucketState);

  const handleButtonClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
  };

  const showButton = () => {
    return (
      <Button className="py-0" variant="custom" type="button" onClick={handleButtonClick}>
        Create New Bucket
      </Button>
    );
  };

  return (
    <Container fluid className="px-5">
      <h4 className="my-3">Bucket List</h4>
      <div>
        {displayCreateBucket ? <CreateBucket /> : null}
        <div className="p-4 bg-white">
          <div>
            <Row className="mb-3">
              <Col className="d-flex align-items-center">
                <div>All Buckets ({tableResults.length})</div>
              </Col>
              <Col className="d-flex justify-content-end">
                {displayCreateButton ? showButton() : null}
              </Col>
            </Row>
          </div>
          <BucketTable />
        </div>
      </div>
    </Container>
  );
};

export default BucketList;
