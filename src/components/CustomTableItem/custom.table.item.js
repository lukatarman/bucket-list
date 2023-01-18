import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const CustomTableItem = ({
  items,
  index,
  handleTableItemClick,
  variation,
  lastIndex,
}) => {
  const renderItems = items.map((item, i) => {
    const lastBorder = index === lastIndex ? " border-bottom-0" : "";

    return (
      <td
        key={i}
        className={variation && i === 0 ? `d-flex align-items-center ${lastBorder}` : ""}
      >
        {variation && i === 0 ? (
          <FontAwesomeIcon className="p-2" icon={faFileLines} size="xl" />
        ) : null}
        <div className={variation && i === 0 ? "d-flex align-items-center p-2" : "p-2"}>
          {item}
        </div>
      </td>
    );
  });

  return <tr onClick={() => handleTableItemClick(index)}>{renderItems}</tr>;
};

export default CustomTableItem;
