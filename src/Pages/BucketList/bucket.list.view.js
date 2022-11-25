import { useState } from "react";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";

const BucketList = () => {
  const [displayCreateBucket, setDisplayCreateBucket] = useState(false);
  const [displayCreateButton, setDisplayCreateButton] = useState(true);
  const [tableResults, setTableResults] = useState([]);

  return (
    <div>
      {displayCreateBucket ? (
        <CreateBucket
          setDisplayCreateBucket={setDisplayCreateBucket}
          setDisplayCreateButton={setDisplayCreateButton}
          setTableResults={setTableResults}
        />
      ) : null}
      <BucketTable
        setDisplayCreateBucket={setDisplayCreateBucket}
        setDisplayCreateButton={setDisplayCreateButton}
        displayCreateButton={displayCreateButton}
        tableResults={tableResults}
        setTableResults={setTableResults}
      />
    </div>
  );
};

export default BucketList;
