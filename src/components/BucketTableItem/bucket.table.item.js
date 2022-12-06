const BucketTableItem = ({ item, handleTableItemClick }) => {
  return (
    <tbody>
      <tr className="table-row-content" onClick={() => handleTableItemClick(item)}>
        <td>{item.name}</td>
        <td>{item.location}</td>
      </tr>
    </tbody>
  );
};

export default BucketTableItem;
