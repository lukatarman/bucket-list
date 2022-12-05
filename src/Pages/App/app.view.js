import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState } from "react";
import BucketList from "../BucketList/bucket.list.view.js";
import MyStorage from "../MyStorage/my.storage.view.js";

const App = () => {
  const [selectedBucket, setSelectedBucket] = useState("");
  const [visiblePage, setVisiblePage] = useState("bucket-list");

  const handleBrandClick = () => {
    setVisiblePage("bucket-list");
  };

  const render = () => {
    if (visiblePage === "bucket-list")
      return (
        <BucketList
          setSelectedBucket={setSelectedBucket}
          setVisiblePage={setVisiblePage}
        />
      );
    if (visiblePage === "my-storage")
      return (
        <MyStorage selectedBucket={selectedBucket} setVisiblePage={setVisiblePage} />
      );
  };

  return (
    <div className="app-background">
      <Navbar variant="custom" className="px-3">
        <Container fluid>
          <h4 className="brand-custom" onClick={handleBrandClick}>
            Secure cloud storage
          </h4>
        </Container>
      </Navbar>
      {render()}
    </div>
  );
};

export default App;