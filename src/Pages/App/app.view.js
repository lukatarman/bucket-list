import React from "react";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState } from "react";
import AppBehavoir from "./app.behavior.js";

const App = () => {
  const [selectedBucket, setSelectedBucket] = useState("");
  const [visiblePage, setVisiblePage] = useState("bucket-list");

  const [handleBrandClick, render] = AppBehavoir();

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
