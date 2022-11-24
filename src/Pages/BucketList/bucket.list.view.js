import { useState } from "react";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";

const BucketList = () => {
  const [displayCreateBucket, setDisplayCreateBucket] = useState(false);
  const [displayCreateButton, setDisplayCreateButton] = useState(true);

  return (
    <div>
      {displayCreateBucket ? (
        <CreateBucket
          setDisplayCreateBucket={setDisplayCreateBucket}
          setDisplayCreateButton={setDisplayCreateButton}
        />
      ) : null}
      <BucketTable
        setDisplayCreateBucket={setDisplayCreateBucket}
        setDisplayCreateButton={setDisplayCreateButton}
        displayCreateButton={displayCreateButton}
      />
    </div>
  );
};

export default BucketList;
