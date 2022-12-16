import { Button } from "react-bootstrap";

const CustomButton = ({ customClasses, handleClick, buttonValue }) => {
  return (
    <Button
      className={`${customClasses} py-0`}
      variant="custom"
      type="button"
      onClick={handleClick}
    >
      {buttonValue}
    </Button>
  );
};

export default CustomButton;
