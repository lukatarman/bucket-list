import { useEffect } from "react";
import { getBucketList } from "../../adapters/http.client.adapter.js";

const BucketTable = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  displayCreateButton,
  tableResults,
  setTableResults,
  setSelectedBucket,
  setVisiblePage,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getBucketList();
      setTableResults(response.data);
    };

    fetchData();
  }, [setTableResults]);

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

  const tableRender = tableResults.map((result, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          setSelectedBucket(result.name);
          setVisiblePage("my-storage");
        }}
      >
        {result.name}:{result.location}
      </div>
    );
  });

  return (
    <div>
      <div>
        <div>all buckets ({tableResults.length})</div>
        <div>{displayCreateButton ? showButton() : null}</div>
      </div>
      <div>{tableRender}</div>
    </div>
  );
};

export default BucketTable;
