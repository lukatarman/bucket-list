import { Container } from "react-bootstrap";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";
import { displayCreateBucketState } from "../../contexts/BucketListContext/index.js";

const BucketList = ({ setSelectedBucket, setVisiblePage }) => {
  const displayCreateBucket = useRecoilValue(displayCreateBucketState);

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
