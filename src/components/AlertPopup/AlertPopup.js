import { Button, Modal } from "react-bootstrap";
import { deleteFile } from "../../adapters/http.client.adapter.js";
import { getFileList } from "../../adapters/http.client.adapter.js";

const AlertPopup = ({ showAlert, setShowAlert, selectedBucket, setFilesTable }) => {
  const handleClose = () => setShowAlert(false);

  const handleDeleteConfirm = async () => {
    await deleteFile(selectedBucket);

    const response = await getFileList(selectedBucket);

    setFilesTable(response.data);
    handleClose();
  };

  return (
    <div>
      <Modal centered show={showAlert} onHide={handleClose}>
        <Modal.Body>
          <div className="mb-2">Do you really want to delete this object?</div>
          <div>
            <Button variant="custom" onClick={handleDeleteConfirm} className="m-2">
              Delete
            </Button>
            <Button variant="custom" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AlertPopup;
