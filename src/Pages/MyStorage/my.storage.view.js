import { useState } from "react";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";

const MyStorage = ({ selectedBucket }) => {
  const [visibleTab, setVisibleTab] = useState("file-list");
  const [filesTable, setFilesTable] = useState([]);

  const displayTab = () => {
    if (visibleTab === "file-list")
      return (
        <FileList
          selectedBucket={selectedBucket}
          filesTable={filesTable}
          setFilesTable={setFilesTable}
        />
      );
    if (visibleTab === "file-details")
      return <FileDetails filesTable={filesTable} selectedBucket={selectedBucket} />;
  };
  return (
    <div>
      <h1>{selectedBucket.name}</h1>
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
