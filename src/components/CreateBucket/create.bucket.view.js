const CreateBucket = ({ setDisplayCreateBucket, setDisplayCreateButton }) => {
  const testFunc = async (e) => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);
  };

  return (
    <div>
      <h5>Create new bucket</h5>
      <form onSubmit={testFunc}>
        <div>
          <div>
            <label>Bucket Name*</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Bucket Location*</label>
            <input type="text"></input>
          </div>
        </div>

        <button type="submit">Create Bucket</button>
      </form>
    </div>
  );
};

export default CreateBucket;
