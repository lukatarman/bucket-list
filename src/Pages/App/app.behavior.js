import { useRecoilState, useSetRecoilState } from "recoil";
import { visiblePageState } from "../../contexts/AppContext";
import {
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext";
import { filesTableState } from "../../contexts/MyStorageContext/index.js";

const AppBehavior = () => {
  const [visiblePage, setVisiblePage] = useRecoilState(visiblePageState);
  const setDisplayCreateBucket = useSetRecoilState(displayCreateBucketState);
  const setDisplayCreateButton = useSetRecoilState(displayCreateButtonState);
  const setFilesTable = useSetRecoilState(filesTableState);

  const handleBrandClick = () => {
    setVisiblePage("bucket-list");
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);
    setFilesTable([]);
  };

  return [visiblePage, handleBrandClick];
};

export default AppBehavior;
