import { Container, Tab, Tabs } from "react-bootstrap";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";
import AlertPopup from "../../components/AlertPopup/AlertPopup.js";
import { deleteBucket } from "../../adapters/http.client.adapter.js";
import {
  selectedBucketState,
  visiblePageState,
} from "../../contexts/AppContext/index.js";
import {
  visibleTabState,
  visibleDeleteState,
  showDetailsAlertState,
} from "../../contexts/MyStorageContext/index.js";

const MyStorage = () => {
  const selectedBucket = useRecoilValue(selectedBucketState);
  const setVisiblePage = useRecoilValue(visiblePageState);
  const [visibleTab, setVisibleTab] = useRecoilState(visibleTabState);
  const [visibleDelete, setVisibleDelete] = useRecoilState(visibleDeleteState);
  const [setShowDetailsAlert] = useSetRecoilState(showDetailsAlertState);

  useEffect(() => {
    visibleTab === "file-details" ? setVisibleDelete(true) : setVisibleDelete(false);
  }, [visibleTab]);

  const handleDeleteClick = () => {
    deleteBucket(selectedBucket.index);
    setVisiblePage("bucket-list");
  };

  const handleTabSelect = (tab) => {
    setVisibleTab(tab);
  };

  return (
    <Container fluid className="px-5">
      <AlertPopup handleDelete={handleDeleteClick} />
      <h4 className="my-3">{selectedBucket.name}</h4>
      <div className="element-position-custom">
        <Tabs
          className="tabs-outline-custom"
          activeKey={visibleTab}
          onSelect={handleTabSelect}
        >
          <Tab eventKey="file-list" title="Files">
            <FileList />
          </Tab>
          <Tab eventKey="file-details" title="Details">
            <FileDetails />
          </Tab>
        </Tabs>
        <div className="button-position-custom p-1">
          <div>
            {visibleDelete ? (
              <button
                className="delete-buttom-custom px-2"
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
