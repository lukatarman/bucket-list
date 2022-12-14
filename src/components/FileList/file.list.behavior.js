import { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { uploadFile, getFiles, deleteFile } from "../../adapters/http.client.adapter.js";
import { selectedBucketState } from "../../contexts/AppContext";
import { filesTableState } from "../../contexts/MyStorageContext";

const FileListBehavior = (uploadButtonRef) => {
  const selectedBucket = useRecoilValue(selectedBucketState);
  const setFilesTable = useSetRecoilState(filesTableState);
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
  return [
    showAlert,
    setShowAlert,
    handleDelete,
    handleDeleteButtonClick,
    handleUploadButtonClick,
    handleFileUpload,
  ];
};

export default FileListBehavior;
