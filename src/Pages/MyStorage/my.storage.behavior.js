import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { deleteBucket } from "../../adapters/http.client.adapter.js";
import {
  selectedBucketState,
  visiblePageState,
} from "../../contexts/AppContext/index.js";
import {
  visibleTabState,
  visibleDeleteState,
} from "../../contexts/MyStorageContext/index.js";

const MyStorageBehavior = () => {
  const selectedBucket = useRecoilValue(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);
  const [visibleTab, setVisibleTab] = useRecoilState(visibleTabState);
  const setVisibleDelete = useSetRecoilState(visibleDeleteState);

  useEffect(() => {
    visibleTab === "file-details" ? setVisibleDelete(true) : setVisibleDelete(false);
  }, [visibleTab]);

  const handleDeleteClick = () => {
    deleteBucket(selectedBucket.index);
    setVisiblePage("bucket-list");
  };

  const handleTabSelect = (tab) => {
    setVisibleTab(tab);
  };
  return [handleDeleteClick, selectedBucket, visibleTab, handleTabSelect];
};

export default MyStorageBehavior;
