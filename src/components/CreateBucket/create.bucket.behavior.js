const CreateBucketBehavior = (
  setDisplayCreateBucket,
  setDisplayCreateButton,
  setTableResults
) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [locationValue, setLocationValue] = useState("Kranj");

  const handleSubmit = async () => {
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);

    await createBucket({ name: nameInputValue, location: locationValue });

    const response = await getBuckets();
    setTableResults(response.data);
  };

  const handleNameChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationValue(e.value);
  };

  return [handleSubmit, handleNameChange, handleLocationChange, nameInputValue];
};

export default CreateBucketBehavior;
