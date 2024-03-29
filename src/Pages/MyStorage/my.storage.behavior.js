import { useEffect } from "react";
import { deleteBucket } from "../../adapters/http.client.adapter.js";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { selectedBucketState, visiblePageState } from "../../contexts/AppContext";
import {
  visibleTabState,
  visibleDeleteState,
  showDetailsAlertState,
} from "../../contexts/MyStorageContext";

const MyStorageBehavior = () => {
  const selectedBucket = useRecoilValue(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);
  const [visibleTab, setVisibleTab] = useRecoilState(visibleTabState);
  const [visibleDelete, setVisibleDelete] = useRecoilState(visibleDeleteState);
  const [showDetailsAlert, setShowDetailsAlert] = useRecoilState(showDetailsAlertState);

  useEffect(() => {
    visibleTab === "file-details" ? setVisibleDelete(true) : setVisibleDelete(false);
  }, [visibleTab, setVisibleDelete]);

  const handleDeleteClick = () => {
    deleteBucket(selectedBucket.index);
    setVisiblePage("bucket-list");
  };

  const handleTabSelect = (tab) => {
    setVisibleTab(tab);
  };

  return [
    handleDeleteClick,
    selectedBucket,
    visibleTab,
    handleTabSelect,
    visibleDelete,
    showDetailsAlert,
    setShowDetailsAlert,
  ];
};

export default MyStorageBehavior;
