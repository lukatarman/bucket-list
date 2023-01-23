import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { selectedFileList } from "../../contexts/MyStorageContext";

const CustomTableItem = ({
  items,
  index,
  handleTableItemClick,
  variation,
  lastIndex,
}) => {
  const selectedFileIndex = useRecoilValue(selectedFileList);

  const isSelected = index === selectedFileIndex && variation ? "is-selected" : "";

  const renderItems = items.map((item, i) => {
    const lastBottomBorder = index === lastIndex ? " border-bottom-0" : "";

    return (
      <td
        key={i}
        className={
          variation && i === 0 ? `d-flex align-items-center ${lastBottomBorder}` : ""
        }
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

  return (
    <tr className={isSelected} onClick={() => handleTableItemClick(index)}>
      {renderItems}
    </tr>
  );
};

export default CustomTableItem;
