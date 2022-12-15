import { useRecoilValue } from "recoil";
import { selectedBucketState } from "../../contexts/AppContext/index.js";

const FileDetails = () => {
  const selectedBucket = useRecoilValue(selectedBucketState);

  return (
    <div className="px-5 bg-white py-3 d-flex flex-row">
      <div className="p-3">
        <div>Bucket name:</div>
        <div>Location:</div>
        <div>Storage size:</div>
      </div>
      <div className="p-3">
        <div>{selectedBucket.name}</div>
        <div>{selectedBucket.location}</div>
        <div>{selectedBucket.size}</div>
      </div>
    </div>
  );
};

export default FileDetails;
