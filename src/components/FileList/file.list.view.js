import { Row, Col, Button, Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { uploadFile } from "../../adapters/http.client.adapter.js";
import { getFiles } from "../../adapters/http.client.adapter.js";
import { deleteFile } from "../../adapters/http.client.adapter.js";
import AlertPopup from "../AlertPopup/AlertPopup.js";

const FileList = ({ selectedBucket, filesTable, setFilesTable }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFiles(selectedBucket.index);
      setFilesTable(response.data);
    };

    fetchData();
  }, [setFilesTable]);

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("index", selectedBucket.index);
    await uploadFile(formData);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
  };

  const handleDeleteButtonClick = async () => {
    if (selectedFile.name === "") {
      console.log("please select a file");
      return;
    }
    setShowAlert(true);
  };

  const handleDelete = async () => {
    console.log("handling delete");
    await deleteFile(selectedBucket);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
  };

  const handleFileClick = (selectedFileObject) => {
    setSelectedFile(selectedFileObject);
  };

  const tableRender = filesTable.map((file, index) => (
    <tr
      key={index}
      onClick={() => {
        handleFileClick({
          name: file.name,
          index,
        });
      }}
    >
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
