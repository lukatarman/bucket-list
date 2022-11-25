import { uploadFiles } from "../../adapters/http.client.adapter.js";

const FileList = () => {
  const testFunc = (e) => {
    console.log("Submitted");
    console.log(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    uploadFiles(formData);
  };

  return (
    <div>
      <div>
        <div>All Files (4)</div>
        <div>
          <input type="button" value="Delete object"></input>
          <label htmlFor="upload-btn">Upload</label>
          <input id="upload-btn" type="file" onChange={testFunc} hidden />
        </div>
      </div>
      <div>Table</div>
    </div>
  );
};

export default FileList;
