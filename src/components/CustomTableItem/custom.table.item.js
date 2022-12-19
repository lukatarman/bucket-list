const CustomTableItem = ({ items, index, handleTableItemClick }) => {
  const renderItems = items.map((item, i) => {
    return <td key={i}>{item}</td>;
  });

  return (
    <tbody>
      <tr className="table-row-content" onClick={() => handleTableItemClick(index)}>
        {renderItems}
      </tr>
    </tbody>
  );
};

export default CustomTableItem;
