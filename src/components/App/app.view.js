import BucketList from "../../pages/BucketList/bucket.list.view.js";
import MyStorage from "../../pages/MyStorage/my.storage.view.js";
import { useState } from "react";
import "../../assets/global.css";

const App = () => {
  const [selectedBucket, setSelectedBucket] = useState("");
  const [visiblePage, setVisiblePage] = useState("bucket-list");

  const render = () => {
    if (visiblePage === "bucket-list")
      return (
        <BucketList
          setSelectedBucket={setSelectedBucket}
          setVisiblePage={setVisiblePage}
        />
      );
    if (visiblePage === "my-storage")
      return <MyStorage selectedBucket={selectedBucket} />;
  };

  return (
    <div>
      <nav
        onClick={() => {
          setVisiblePage("bucket-list");
        }}
      >
        Secure could storage
      </nav>
      {render()}
    </div>
  );
};

export default App;
