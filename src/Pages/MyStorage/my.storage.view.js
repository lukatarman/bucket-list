import { Container, Tab, Tabs } from "react-bootstrap";
import { useState, useEffect } from "react";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";
import AlertPopup from "../../components/AlertPopup/AlertPopup.js";
import { deleteBucket } from "../../adapters/http.client.adapter.js";

const MyStorage = ({ selectedBucket, setVisiblePage }) => {
  const [visibleTab, setVisibleTab] = useState("file-list");
  const [filesTable, setFilesTable] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [showDetailsAlert, setShowDetailsAlert] = useState(false);

  useEffect(() => {
    console.log("visible tab component changed");
    setVisibleDelete(!visibleDelete);
    console.log(`swapped visible delete to ${visibleDelete}`);
  }, [visibleTab]);

  const handleDeleteClick = () => {
    deleteBucket(selectedBucket.index);
    setVisiblePage("bucket-list");
  };

  const handleTabSelect = (key) => {
    setVisibleTab(key);
    console.log(`visible tab changed to ${key}`);
  };

  return (
    <Container fluid className="px-5">
      <AlertPopup
        showAlert={showDetailsAlert}
        setShowAlert={setShowDetailsAlert}
        handleDelete={handleDeleteClick}
      />
      <h4 className="my-3">{selectedBucket.name}</h4>
      <div className="custom-position">
        <Tabs
          className="custom-test"
          id="controlled-tab-example"
          activeKey={visibleTab}
          onSelect={handleTabSelect}
        >
          <Tab eventKey="file-list" title="Files">
            <FileList
              selectedBucket={selectedBucket}
              filesTable={filesTable}
              setFilesTable={setFilesTable}
            />
          </Tab>
          <Tab eventKey="file-details" title="Details">
            <FileDetails
              filesTable={filesTable}
              selectedBucket={selectedBucket}
              showDetailsAlert={showDetailsAlert}
              setShowDetailsAlert={setShowDetailsAlert}
            />
          </Tab>
        </Tabs>
        <div className="custom-button-position p-1">
          <div>
            {!visibleDelete ? (
              <button
                className="custom-delete-button px-2"
                onClick={() => setShowDetailsAlert(true)}
              >
                Delete Bucket
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyStorage;
