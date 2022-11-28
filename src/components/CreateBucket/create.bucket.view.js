import { Row, Col, Form, Button } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { postData } from "../../adapters/http.client.adapter.js";
import { useState } from "react";

const CreateBucket = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  setTableResults,
}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [locationValue, setLocationValue] = useState("Kranj");

  const handleSubmit = async () => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);

    await postData({ name: nameInputValue, location: locationValue });

    const response = await getBuckets();
    setTableResults(response.data);
  };

  const onNameChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocationValue(e.value);
    console.log(locationValue);
  };

  return (
    <div>
      <div className="px-3">Create new bucket</div>
      <form className="bg-white p-3 mb-3" onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col>
            <Form.Label>Bucket Name*</Form.Label>
            <Form.Control
              className="custom-form-control"
              type="text"
              value={nameInputValue}
              onChange={onNameChange}
            ></Form.Control>
          </Col>
          <Col>
            <Form.Label>Bucket Location*</Form.Label>
            <Dropdown
              controlClassName="custom-dropdown"
              onChange={onLocationChange}
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
