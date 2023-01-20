import { Button, Modal } from "react-bootstrap";
import CustomButton from "../CustomButton/custom.button.js";

const AlertPopup = ({ showAlert, setShowAlert, handleDelete, type }) => {
  const handleClose = () => setShowAlert(false);

  const handleDeleteConfirm = () => {
    handleDelete();
    handleClose();
  };

  return (
    <div>
      <Modal centered show={showAlert} onHide={handleClose}>
        <Modal.Body>
          <div className="mb-2">Do you really want to delete this {type}?</div>
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
    </div>
  );
};

export default AlertPopup;
