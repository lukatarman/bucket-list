import { Row, Col, Table } from "react-bootstrap";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import AlertPopup from "../AlertPopup/AlertPopup.js";
import { filesTableState } from "../../contexts/MyStorageContext";
import CustomButton from "../CustomButton/custom.button.js";
import FileListBehavior from "./file.list.behavior.js";

//todo create table component, extract JSX there.

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
  ] = FileListBehavior(uploadButtonRef);

  const tableRender = filesTable.map((file, index) => (
    <tr key={index}>
      <td className="d-flex align-items-center">
        <FontAwesomeIcon className="p-2" icon={faFileLines} size="xl" />
        <div className="d-flex align-items-center p-2">{file.name}</div>
      </td>

      <td>
        <div className="p-2">{file.lastModified}</div>
      </td>
      <td>
        <div className="p-2">{file.size}</div>
      </td>
    </tr>
  ));

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

        <Table hover>
          <thead>
            <tr className="table-row-bordered">
              <th width="55%" className="table-head-content">
                Name
              </th>
              <th width="25%" className="table-head-content">
                Last Modified
              </th>
              <th width="25%" className="table-head-content">
                Size
              </th>
            </tr>
          </thead>
          <tbody className="bordered-table-custom mb-5">{tableRender}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default FileList;
