import { useEffect } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bucketListTableResultsState } from "../../contexts/BucketListContext/index.js";
import {
  selectedBucketState,
  visiblePageState,
} from "../../contexts/AppContext/index.js";

const BucketTableBehavior = () => {
  const [tableResults, setTableResults] = useRecoilState(bucketListTableResultsState);

  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setTableResults(response.data);
    };

    fetchData();
  }, [setTableResults]);

  const handleTableItemClick = (result, index) => {
    setSelectedBucket({
      name: result.name,
      location: result.location,
      size: result.size,
      index,
    });
    setVisiblePage("my-storage");
  };

  return [tableResults, handleTableItemClick];
};

export default BucketTableBehavior;
