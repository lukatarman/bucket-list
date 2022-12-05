import { Container } from "react-bootstrap";
import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";
import { useRecoilValue } from "recoil";
import { displayCreateBucketState } from "../../contexts/BucketListContext/index.js";

const BucketList = () => {
  const displayCreateBucket = useRecoilValue(displayCreateBucketState);

  return (
    <Container fluid className="px-5">
      <h4 className="my-3">Bucket List</h4>
      <div>
        {displayCreateBucket ? <CreateBucket /> : null}
        <BucketTable />
      </div>
    </Container>
  );
};

export default BucketList;
