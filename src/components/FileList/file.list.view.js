import { Row, Col, Button, Table } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import AlertPopup from "../AlertPopup/AlertPopup.js";
import { filesTableState } from "../../contexts/MyStorageContext";
import FileListBehavior from "./file.list.behavior.js";

//todo create table component, extract JSX there.

const FileList = () => {
  const filesTable = useRecoilValue(filesTableState);

  const [
    showAlert,
    setShowAlert,
    handleDelete,
    handleDeleteButtonClick,
    handleFileUpload,
  ] = FileListBehavior();

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
            <Button
              className="py-0 mx-2"
              variant="custom"
              type="button"
              onClick={handleDeleteButtonClick}
            >
              Delete Object
            </Button>
            <label htmlFor="upload-btn" className="btn-custom px-2 mx-2">
              Upload Object
            </label>
            <input id="upload-btn" type="file" onChange={handleFileUpload} hidden />
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
