import { Container, Tab, Tabs } from "react-bootstrap";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  visibleDeleteState,
  showDetailsAlertState,
} from "../../contexts/MyStorageContext";
import FileList from "../../components/FileList/file.list.view.js";
import FileDetails from "../../components/FileDetails/file.details.view.js";
import AlertPopup from "../../components/AlertPopup/AlertPopup.js";
import CustomButton from "../../components/CustomButton/custom.button.js";
import MyStorageBehavior from "./my.storage.behavior.js";

const MyStorage = () => {
  const [showDetailsAlert, setShowDetailsAlert] = useRecoilState(showDetailsAlertState);
  const visibleDelete = useRecoilValue(visibleDeleteState);

  const [handleDeleteClick, selectedBucket, visibleTab, handleTabSelect] =
    MyStorageBehavior();

  return (
    <Container fluid className="px-5">
      <AlertPopup
        showAlert={showDetailsAlert}
        setShowAlert={setShowDetailsAlert}
        handleDelete={handleDeleteClick}
      />
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
        {visibleDelete && (
          <CustomButton
            customClasses="delete-buttom-custom"
            handleClick={() => setShowDetailsAlert(true)}
            buttonValue="Delete Bucket"
          />
        )}
      </div>
    </Container>
  );
};

export default MyStorage;
