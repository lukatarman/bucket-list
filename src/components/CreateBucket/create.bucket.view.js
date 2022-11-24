const CreateBucket = ({ setDisplayCreateBucket, setDisplayCreateButton }) => {
  const onButtonClick = () => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);
  };
  return (
    <div>
      <h5>Create new bucket</h5>
      <div>
        <div>Bucket inputs</div>
        <button type="button" onClick={onButtonClick}>
          Create Bucket
        </button>
      </div>
    </div>
  );
};

export default CreateBucket;
