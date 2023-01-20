import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import AlertPopup from "../AlertPopup/AlertPopup.js";
import CustomButton from "../CustomButton/custom.button.js";
import CustomTable from "../CustomTable/custom.table.view.js";
import FileListBehavior from "./file.list.behavior.js";

const FileList = () => {
  const uploadButtonRef = useRef();

  const [
    showAlert,
    setShowAlert,
    handleFileUpload,
    handleFileDelete,
    handleDeleteButtonClick,
    handleUploadButtonClick,
    filesTable,
    tableValues,
  ] = FileListBehavior(uploadButtonRef);

  return (
    <div>
      <AlertPopup
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleDelete={handleFileDelete}
        type="file"
      />
      <div className="p-4 bg-white border border-top-0">
        <Row className="mb-4">
          <Col className="d-flex align-items-center">
            <div>All Files ({filesTable.length})</div>
          </Col>
          <Col className="d-flex justify-content-end">
            <CustomButton
              customClasses="py-0 mx-2"
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
