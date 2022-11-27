import { useEffect } from "react";
import { uploadFile } from "../../adapters/http.client.adapter.js";
import { getFileList } from "../../adapters/http.client.adapter.js";

const FileList = ({ selectedBucket, filesTable, setFilesTable }) => {
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
    formData.append("name", selectedBucket);
    await uploadFile(formData);

    const response = await getFileList(selectedBucket);

    setFilesTable(response.data);
  };

  const tableRender = filesTable.map((file, index) => (
    <div key={index}>
      {file.name} {file.lastModified} {file.size}
    </div>
  ));

  return (
    <div>
      <div>
        <div>All Files ({filesTable.length})</div>
        <div>
          <input type="button" value="Delete object"></input>
          <label htmlFor="upload-btn">Upload</label>
          <input id="upload-btn" type="file" onChange={handleInputChange} hidden />
        </div>
      </div>
      <div>{tableRender}</div>
    </div>
  );
};

export default FileList;
