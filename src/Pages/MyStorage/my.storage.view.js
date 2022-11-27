import { Container, Tab, Tabs, Sonnet } from "react-bootstrap";
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
    <Container fluid className="px-5">
      <h4 className="my-3">{selectedBucket.name}</h4>
      <div>
        <Tabs
          className="my-test"
          id="controlled-tab-example"
          activeKey={visibleTab}
          onSelect={(key) => setVisibleTab(key)}
        >
          <Tab eventKey="file-list" title="Files" className="my-test-now">
            <FileList
              selectedBucket={selectedBucket}
              filesTable={filesTable}
              setFilesTable={setFilesTable}
            />
          </Tab>
          <Tab eventKey="file-details" title="Details" className="bg-white pb-3">
            <FileDetails filesTable={filesTable} selectedBucket={selectedBucket} />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default MyStorage;
