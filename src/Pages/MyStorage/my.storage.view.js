import { useState } from "react";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";

const MyStorage = () => {
  const [visibleTab, setVisibleTab] = useState("file-list");

  const displayTab = () => {
    if (visibleTab === "file-list") return <FileList />;
    if (visibleTab === "file-details") return <FileDetails />;
  };
  return (
    <div>
      <h1>MyNewStorage</h1>
      <div>
        <button
          onClick={() => {
            setVisibleTab("file-list");
          }}
        >
          Files
        </button>
        <button
          onClick={() => {
            setVisibleTab("file-details");
          }}
        >
          Details
        </button>
        {displayTab()}
      </div>
    </div>
  );
};

export default MyStorage;
