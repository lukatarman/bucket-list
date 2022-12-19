import { useEffect, useState } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bucketListTableResultsState } from "../../contexts/BucketListContext";
import { selectedBucketState, visiblePageState } from "../../contexts/AppContext";

const BucketTableBehavior = () => {
  const [fetchResults, setFetchResults] = useRecoilState(bucketListTableResultsState);
  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  const [tableValues, setTableValues] = useState({ head: ["Name", "Location"], row: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setFetchResults(response.data);
    };

    fetchData();
  }, [setFetchResults]);

  useEffect(() => {
    const tableResults = fetchResults.map((result) => [result.name, result.location]);

    setTableValues({ head: tableValues.head, row: tableResults });
  }, [fetchResults]);

  const handleTableItemClick = (result, index) => {
    setSelectedBucket({
      name: result.name,
      location: result.location,
      size: result.size,
      index,
    });
    setVisiblePage("my-storage");
  };

  return [handleTableItemClick, tableValues];
};

export default BucketTableBehavior;
