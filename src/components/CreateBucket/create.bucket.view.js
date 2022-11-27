import { getBucketList } from "../../adapters/http.client.adapter.js";
import { postData } from "../../adapters/http.client.adapter.js";
import { useState } from "react";

const CreateBucket = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  setTableResults,
}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [locationvalue, setLocationValue] = useState("");

  const handleSubmit = async () => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);

    await postData({ name: nameInputValue, location: locationvalue });

    const response = await getBucketList();
    setTableResults(response.data);
  };

  const onNameChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  return (
    <div>
      <h5>Create new bucket</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Bucket Name*</label>
            <input
              type="text"
              name="name"
              value={nameInputValue}
              onChange={onNameChange}
            />
          </div>
          <div>
            <label>Bucket Location*</label>
            <input
              type="text"
              name="location"
              value={locationvalue}
              onChange={onLocationChange}
            />
          </div>
        </div>

        <button type="submit">Create Bucket</button>
      </form>
    </div>
  );
};

export default CreateBucket;
