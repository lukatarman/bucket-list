import BucketTable from "../../components/BucketTable/bucket.table.view.js";
import CreateBucket from "../../components/CreateBucket/create.bucket.view.js";

const BucketList = () => {
  return (
    <div>
      <CreateBucket />
      <BucketTable />
    </div>
  );
};

export default BucketList;
