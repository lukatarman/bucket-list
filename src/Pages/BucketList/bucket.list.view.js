import { Container } from "react-bootstrap";
import { useState } from "react";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";

const BucketList = ({ setSelectedBucket, setVisiblePage }) => {
  const [displayCreateBucket, setDisplayCreateBucket] = useState(false);
  const [displayCreateButton, setDisplayCreateButton] = useState(true);
  const [tableResults, setTableResults] = useState([]);

  return (
    <Container fluid className="px-5">
      <h4 className="my-3">Bucket List</h4>
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
          setSelectedBucket={setSelectedBucket}
          setVisiblePage={setVisiblePage}
        />
      </div>
    </Container>
  );
};

export default BucketList;
