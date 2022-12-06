import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  bucketListTableResultsState,
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext/index.js";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";
import CustomButton from "../../components/CustomButton/custom.button.js";

const BucketList = () => {
  const [displayCreateBucket, setDisplayCreateBucket] = useRecoilState(
    displayCreateBucketState
  );
  const [displayCreateButton, setDisplayCreateButton] = useRecoilState(
    displayCreateButtonState
  );
  const tableResults = useRecoilValue(bucketListTableResultsState);

  const handleClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
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
                {displayCreateButton ? <CustomButton handleClick={handleClick} /> : null}
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
