import { useRecoilState, useSetRecoilState } from "recoil";
import { visiblePageState } from "../../contexts/AppContext";
import {
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext";

const AppBehavior = () => {
  const [visiblePage, setVisiblePage] = useRecoilState(visiblePageState);
  const setDisplayCreateBucket = useSetRecoilState(displayCreateBucketState);
  const setDisplayCreateButton = useSetRecoilState(displayCreateButtonState);

  const handleBrandClick = () => {
    setVisiblePage("bucket-list");
    setDisplayCreateBucket(false);
    setDisplayCreateButton(true);
  };

  return [visiblePage, handleBrandClick];
};

export default AppBehavior;
