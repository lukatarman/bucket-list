import { useEffect, useState } from "react";
import { getData } from "../../adapters/http-client-adapter.js";

const BucketTable = ({
  setDisplayCreateBucket,
  setDisplayCreateButton,
  displayCreateButton,
}) => {
  const [tableResults, setTableResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setTableResults(response.data);
    };

    fetchData();
  }, [tableResults, setTableResults]);

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

  const tableRender = tableResults.map((result) => {
    return (
      <div>
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
