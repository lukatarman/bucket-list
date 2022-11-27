const FileDetails = ({ selectedBucket }) => {
  console.log(selectedBucket);
  return (
    <div>
      <div>{selectedBucket.name}</div>
      <div>{selectedBucket.location}</div>
      <div>{selectedBucket.size}</div>
    </div>
  );
};

export default FileDetails;
