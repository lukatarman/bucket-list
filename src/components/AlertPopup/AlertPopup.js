import { Modal } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { filesTableState, selectedFileList } from "../../contexts/MyStorageContext";
import CustomButton from "../CustomButton/custom.button.js";

const AlertPopup = ({ showAlert, setShowAlert, handleDelete, type }) => {
  const selectedFileIndex = useRecoilValue(selectedFileList);
  const filesTable = useRecoilValue(filesTableState);

  const getConfirmationText = () => {
    if (!filesTable[selectedFileIndex]) return;

    if (type === "bucket") return `Do you really want to delete this bucket?`;
    if (type === "file")
      return (
        <div>
          Do you really want to delete the file{" "}
          <strong>{filesTable[selectedFileIndex].name}</strong>
        </div>
      );
  };

  const handleClose = () => setShowAlert(false);

  const handleDeleteConfirm = () => {
    handleDelete();
    handleClose();
  };

  const renderBody = () => {
    if (type === "bucket") return deleteConfirmRender();
    if (selectedFileIndex === null) return selectItemRender();

    return deleteConfirmRender();
  };

  const selectItemRender = () => {
    return (
      <Modal centered show={showAlert} onHide={handleClose}>
        <Modal.Body>
          <div className="mb-2">Please select the file you want to delete</div>
          <div>
            <CustomButton customClasses="" handleClick={handleClose} buttonValue="Okay" />
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const deleteConfirmRender = () => {
    return (
      <Modal centered show={showAlert} onHide={handleClose}>
        <Modal.Body>
          <div className="mb-2">{getConfirmationText()}</div>
          <div>
            <CustomButton
              customClasses="m-2"
              handleClick={handleDeleteConfirm}
              buttonValue="Delete"
            />
            <CustomButton
              customClasses=""
              handleClick={handleClose}
              buttonValue="Cancel"
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return <div>{renderBody()}</div>;
};

export default AlertPopup;
