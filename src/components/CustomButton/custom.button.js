import { Button } from "react-bootstrap";

const CustomButton = ({ handleClick }) => {
  return (
    <Button className="py-0" variant="custom" type="button" onClick={handleClick}>
      Create New Bucket
    </Button>
  );
};

export default CustomButton;
