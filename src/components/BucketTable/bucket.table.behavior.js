import { useEffect, useState } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bucketListTableResultsState } from "../../contexts/BucketListContext";
import { selectedBucketState, visiblePageState } from "../../contexts/AppContext";

const BucketTableBehavior = () => {
  const [fetchResults, setFetchResults] = useRecoilState(bucketListTableResultsState);
  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  const [tableValues, setTableValues] = useState({
    head: ["Name", "Location"],
    rows: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setFetchResults(response.data);
    };

    fetchData();
  }, [setFetchResults]);

  useEffect(() => {
    const tableResults = fetchResults.map((result) => [result.name, result.location]);

    setTableValues({ head: tableValues.head, rows: tableResults });
  }, [fetchResults]);

  const handleTableItemClick = (index) => {
    setSelectedBucket({
      name: fetchResults[index].name,
      location: fetchResults[index].location,
      size: fetchResults[index].size,
      index,
    });
    setVisiblePage("my-storage");
  };

  return [handleTableItemClick, tableValues];
};

export default BucketTableBehavior;
