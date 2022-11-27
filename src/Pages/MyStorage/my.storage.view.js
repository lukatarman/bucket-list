import { useState } from "react";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";
import { deleteBucket } from "../../adapters/http.client.adapter.js";

const MyStorage = ({ selectedBucket, setVisiblePage }) => {
  const [visibleTab, setVisibleTab] = useState("file-list");
  const [filesTable, setFilesTable] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);

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

  const handleDeleteClick = () => {
    deleteBucket(selectedBucket.index);
    setVisiblePage("bucket-list");
  };

  return (
    <div>
      <h1>{selectedBucket.name}</h1>
      <div>
        <div>
          <button
            onClick={() => {
              setVisibleTab("file-list");
              setVisibleDelete(false);
            }}
          >
            Files
          </button>
          <button
            onClick={() => {
              setVisibleTab("file-details");
              setVisibleDelete(true);
            }}
          >
            Details
          </button>
        </div>
        <div>
          {visibleDelete ? (
            <button onClick={handleDeleteClick}>Delete Bucket</button>
          ) : null}
        </div>
        {displayTab()}
      </div>
    </div>
  );
};

export default MyStorage;
