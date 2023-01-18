import React from "react";
import { Navbar, Container } from "react-bootstrap";
import BucketList from "../BucketList/bucket.list.view.js";
import MyStorage from "../MyStorage/my.storage.view.js";
import AppBehavior from "./app.behavior.js";

const App = () => {
  const [visiblePage, handleBrandClick] = AppBehavior();

  const render = () => {
    if (visiblePage === "bucket-list") return <BucketList />;
    if (visiblePage === "my-storage") return <MyStorage />;
  };

  return (
    <div className="vh-100 bg-light">
      <Navbar variant="custom" className="px-3 bg-secondary">
        <Container fluid>
          <h4 role="button" onClick={handleBrandClick}>
            Secure cloud storage
          </h4>
        </Container>
      </Navbar>
      {render()}
    </div>
  );
};

export default App;
