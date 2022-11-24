const BucketTable = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  displayCreateButton,
}) => {
  const onButtonClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
  };

  const showButton = () => {
    return (
      <button type="button" value="" onClick={onButtonClick}>
        Create Bucket
      </button>
    );
  };

  return (
    <div>
      <div>
        <div>all buckets</div>
        <div>{displayCreateButton ? showButton() : null}</div>
      </div>
      <div>table</div>
    </div>
  );
};

export default BucketTable;
