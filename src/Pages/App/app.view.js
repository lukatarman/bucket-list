import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { visiblePageState } from "../../contexts/AppContext/index.js";
import BucketList from "../BucketList/bucket.list.view.js";
import MyStorage from "../MyStorage/my.storage.view.js";

const App = () => {
  const [visiblePage, setVisiblePage] = useRecoilState(visiblePageState);

  const handleBrandClick = () => {
    setVisiblePage("bucket-list");
  };

  const render = () => {
    if (visiblePage === "bucket-list") return <BucketList />;
    if (visiblePage === "my-storage") return <MyStorage />;
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
