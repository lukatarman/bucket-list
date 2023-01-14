import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { uploadFile, getFiles, deleteFile } from "../../adapters/http.client.adapter.js";
import { selectedBucketState } from "../../contexts/AppContext";
import { filesTableState } from "../../contexts/MyStorageContext";
import { fixFilesTable } from "./services/file.list.service.js";

const FileListBehavior = (uploadButtonRef) => {
  const selectedBucket = useRecoilValue(selectedBucketState);
  const [filesTable, setFilesTable] = useRecoilState(filesTableState);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFiles(selectedBucket.index);
      setFilesTable(response.data);
    };

    fetchData();
  }, [setFilesTable]);

  useEffect(() => {
    console.log(filesTable);
  }, [filesTable]);

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await uploadFile(formData, selectedBucket.index);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
  };

  const handleDeleteButtonClick = async () => {
    setShowAlert(true);
  };

  const handleUploadButtonClick = () => {
    uploadButtonRef.current.click();
  };

  const handleDelete = async () => {
    await deleteFile(selectedBucket.index);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
  };

  const tableValues = {
    head: ["Name", "Last Modified", "Size"],
    rows: fixFilesTable(filesTable),
  };

  return [
    showAlert,
    setShowAlert,
    handleDelete,
    handleDeleteButtonClick,
    handleUploadButtonClick,
    handleFileUpload,
    filesTable,
    tableValues,
  ];
};

export default FileListBehavior;
