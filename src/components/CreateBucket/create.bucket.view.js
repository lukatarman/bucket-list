import { Row, Col, Form, Button } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import CreateBucketBehavior from "./create.bucket.behavior.js";

const CreateBucket = () => {
  const [handleSubmit, handleNameChange, handleLocationChange, nameInputValue] =
    CreateBucketBehavior();

  return (
    <div>
      <div className="px-3 mb-1">Create new bucket</div>
      <form className="bg-white p-4 mb-3" onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col>
            <Form.Label>Bucket Name*</Form.Label>
            <Form.Control
              className="bucket-input rounded-0 w-75 py-1"
              type="text"
              value={nameInputValue}
              onChange={handleNameChange}
            ></Form.Control>
          </Col>
          <Col>
            <Form.Label>Bucket Location*</Form.Label>
            <Dropdown
              controlClassName="w-75 rounded-0 p-1"
              menuClassName="dropdown-custom"
              onChange={handleLocationChange}
              options={["Kranj", "Ljubljana"]}
              placeholder={"Kranj"}
            />
          </Col>
        </Row>

        <Button className="py-0" variant="custom" type="submit">
          Create Bucket
        </Button>
      </form>
    </div>
  );
};

export default CreateBucket;
