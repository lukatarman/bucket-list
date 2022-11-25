import { postData } from "../../adapters/http-client-adapter.js";

const CreateBucket = ({ setDisplayCreateBucket, setDisplayCreateButton }) => {
  const testFunc = async (e) => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);

    const formDataObject = {};
    const formData = new FormData(e.target);

    for (const [key, value] of formData) {
      formDataObject[key] = value;
    }
    postData(formDataObject);
  };

  return (
    <div>
      <h5>Create new bucket</h5>
      <form onSubmit={testFunc}>
        <div>
          <div>
            <label>Bucket Name*</label>
            <input type="text" name="name"></input>
          </div>
          <div>
            <label>Bucket Location*</label>
            <input type="text" name="location"></input>
          </div>
        </div>

        <button type="submit">Create Bucket</button>
      </form>
    </div>
  );
};

export default CreateBucket;
