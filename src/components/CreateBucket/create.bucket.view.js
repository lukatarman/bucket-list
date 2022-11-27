import { Row, Col, Form, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { getBucketList } from "../../adapters/http.client.adapter.js";
import { postData } from "../../adapters/http.client.adapter.js";
import { useState } from "react";

const CreateBucket = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  setTableResults,
}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [locationvalue, setLocationValue] = useState("");

  const handleSubmit = async () => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);

    await postData({ name: nameInputValue, location: locationvalue });

    const response = await getBucketList();
    setTableResults(response.data);
  };

  const onNameChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  return (
    <div>
      <div className="px-3">Create new bucket</div>
      <form className="bg-white p-3 mb-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label htmlFor="name">Bucket Name*</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              value={nameInputValue}
              onChange={onNameChange}
            ></Form.Control>
          </Col>
          <Col>
            <Form.Label htmlFor="name">Bucket Location*</Form.Label>
            <Dropdown as={ButtonGroup}>
              <Button className="py-0" variant="custom-dropdown">
                Split Button
              </Button>

              <Dropdown.Toggle
                className="py-0"
                split
                variant="custom-dropdown-toggler"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <button type="submit">Create Bucket</button>
      </form>
    </div>
  );
};

export default CreateBucket;
