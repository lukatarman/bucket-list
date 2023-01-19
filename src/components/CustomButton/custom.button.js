import { Button } from "react-bootstrap";

const CustomButton = ({ customClasses, handleClick, buttonValue, type = "button" }) => {
  return (
    <Button
      className={`${customClasses} py-0`}
      variant="custom"
      type={type}
      onClick={handleClick}
    >
      {buttonValue}
    </Button>
  );
};

export default CustomButton;
