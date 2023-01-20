import { useState, useEffect } from "react";
import {
  getBuckets,
  uploadFile,
  getFiles,
  deleteFile,
} from "../../adapters/http.client.adapter.js";
import { useRecoilState } from "recoil";
import { selectedBucketState } from "../../contexts/AppContext";
import { filesTableState } from "../../contexts/MyStorageContext";
import { fixFilesTable } from "./services/file.list.service.js";

const FileListBehavior = (uploadButtonRef) => {
  const [selectedBucket, setSelectedBucket] = useRecoilState(selectedBucketState);
  const [filesTable, setFilesTable] = useRecoilState(filesTableState);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFiles(selectedBucket.index);
      setFilesTable(response.data);
    };

    fetchData();
  }, [setFilesTable, selectedBucket.index]);

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await uploadFile(formData, selectedBucket.index);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
    refreshSelectedBucket();
  };

  const handleFileDelete = async () => {
    await deleteFile(selectedBucket.index);

    const response = await getFiles(selectedBucket.index);

    setFilesTable(response.data);
    refreshSelectedBucket();
  };

  const refreshSelectedBucket = async () => {
    const response = await getBuckets();

    setSelectedBucket({
      ...response.data[selectedBucket.index],
      index: selectedBucket.index,
    });
  };

  const handleUploadButtonClick = () => {
    uploadButtonRef.current.click();
  };

  const handleDeleteButtonClick = async () => {
    setShowAlert(true);
  };

  const tableValues = {
    head: ["Name", "Last Modified", "Size"],
    rows: fixFilesTable(filesTable),
  };

  return [
    filesTable,
    showAlert,
    setShowAlert,
    handleFileUpload,
    handleFileDelete,
    handleUploadButtonClick,
    handleDeleteButtonClick,
    tableValues,
  ];
};

export default FileListBehavior;
