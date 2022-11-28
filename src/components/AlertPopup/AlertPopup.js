import { Button, Modal } from "react-bootstrap";

const AlertPopup = ({ showAlert, setShowAlert, handleDelete }) => {
  const handleClose = () => setShowAlert(false);

  const handleDeleteConfirm = () => {
    handleDelete();
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
