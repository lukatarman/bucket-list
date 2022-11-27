import { Row, Col, Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { uploadFile } from "../../adapters/http.client.adapter.js";
import { getFileList } from "../../adapters/http.client.adapter.js";
import { deleteFile } from "../../adapters/http.client.adapter.js";

const FileList = ({ selectedBucket, filesTable, setFilesTable }) => {
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFileList(selectedBucket);
      setFilesTable(response.data);
    };

    fetchData();
  }, [setFilesTable]);

  const handleInputChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("index", selectedBucket.index);
    await uploadFile(formData);

    const response = await getFileList(selectedBucket);

    setFilesTable(response.data);
  };

  const handleButtonClick = async () => {
    if (selectedFile.name === "") {
      console.log("please select a file");
      return;
    }
    await deleteFile({ selectedBucket, selectedFile });

    const response = await getFileList(selectedBucket);

    setFilesTable(response.data);
  };

  const handleFileClick = (selectedFileObject) => {
    setSelectedFile(selectedFileObject);
  };

  const tableRender = filesTable.map((file, index) => (
    <tbody>
      <tr
        key={index}
        className="table-row-content"
        onClick={() => {
          handleFileClick({
            name: file.name,
            index,
          });
        }}
      >
        <td>{file.name}</td>
        <td>{file.lastModified}</td>
        <td>{file.size}</td>
      </tr>
    </tbody>
  ));

  return (
    <div className="p-3 bg-white">
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <div>All Files ({filesTable.length})</div>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            className="py-0 mx-2"
            variant="custom"
            type="button"
            onClick={handleButtonClick}
          >
            Delete object
          </Button>
          <label htmlFor="upload-btn" className="btn-custom px-2 mx-2">
            Upload Object
          </label>
          <input id="upload-btn" type="file" onChange={handleInputChange} hidden />
        </Col>
      </Row>

      <Table borderless hover>
        <thead>
          <tr className="table-row-bordered">
            <th width="50%" className="table-head-content">
              Name
            </th>
            <th width="20%" className="table-head-content">
              Last Modified
            </th>
            <th className="table-head-content">Size</th>
          </tr>
        </thead>
        {tableRender}
      </Table>
    </div>
  );
};

export default FileList;
