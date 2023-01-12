import { Row, Col, Table } from "react-bootstrap";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import AlertPopup from "../AlertPopup/AlertPopup.js";
import { filesTableState } from "../../contexts/MyStorageContext";
import CustomButton from "../CustomButton/custom.button.js";
import CustomTable from "../CustomTable/custom.table.view.js";
import FileListBehavior from "./file.list.behavior.js";

const FileList = () => {
  const filesTable = useRecoilValue(filesTableState);
  const uploadButtonRef = useRef();

  const [
    showAlert,
    setShowAlert,
    handleDelete,
    handleDeleteButtonClick,
    handleUploadButtonClick,
    handleFileUpload,
    fixFilesTable,
    filesTable,
  ] = FileListBehavior(uploadButtonRef);

  const tableValues = {
    head: ["Name", "Last Modified", "Size"],
    rows: fixFilesTable(),
  };

  return (
    <div>
      <AlertPopup
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleDelete={handleDelete}
      />
      <div className="p-4 bg-white">
        <Row className="mb-4">
          <Col className="d-flex align-items-center">
            <div>All Files ({filesTable.length})</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <CustomButton
              customClasses="mx-2"
              handleClick={handleDeleteButtonClick}
              buttonValue="Delete Object"
            />
            <CustomButton
              handleClick={handleUploadButtonClick}
              buttonValue="Upload Object"
            />
            <input
              id="upload-btn"
              ref={uploadButtonRef}
              type="file"
              onChange={handleFileUpload}
              hidden
            />
          </Col>
        </Row>

        <CustomTable
          handleTableItemClick={() => {}}
          tableValues={tableValues}
          firstRowWidth="55%"
          variation={true}
        />
      </div>
    </div>
  );
};

export default FileList;
