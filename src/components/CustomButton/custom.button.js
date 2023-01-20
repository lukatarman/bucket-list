import { Button } from "react-bootstrap";

const CustomButton = ({
  customClasses = "py-0",
  handleClick,
  buttonValue,
  type = "button",
}) => {
  return (
    <Button
      className={`${customClasses}`}
      variant="custom"
      type={type}
      onClick={handleClick}
    >
      {buttonValue}
    </Button>
  );
};

export default CustomButton;
