const BucketTableItem = ({ item, index, handleTableItemClick }) => {
  return (
    <tbody>
      <tr className="table-row-content" onClick={() => handleTableItemClick(item, index)}>
        <td>{item.name}</td>
        <td>{item.location}</td>
      </tr>
    </tbody>
  );
};

export default BucketTableItem;
