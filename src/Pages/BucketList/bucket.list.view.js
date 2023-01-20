import { Container, Col, Row } from "react-bootstrap";
import CustomTable from "../../components/CustomTable/custom.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";
import CustomButton from "../../components/CustomButton/custom.button.js";
import BucketListBehavior from "./bucket.list.behavior.js";

const BucketList = () => {
  const [
    displayCreateBucket,
    displayCreateButton,
    tableResults,
    handleButtonClick,
    handleTableItemClick,
    tableValues,
  ] = BucketListBehavior();

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
                {displayCreateButton ? (
                  <CustomButton
                    customClasses="py-0"
                    handleClick={handleButtonClick}
                    buttonValue="Create New Bucket"
                  />
                ) : null}
              </Col>
            </Row>
          </div>
          <CustomTable
            handleTableItemClick={handleTableItemClick}
            tableValues={tableValues}
            firstRowWidth="70%"
          />
        </div>
      </div>
    </Container>
  );
};

export default BucketList;
