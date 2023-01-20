import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { selectedBucketState, visiblePageState } from "../../contexts/AppContext";
import {
  bucketListTableResultsState,
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext";

const BucketListBehavior = () => {
  const [displayCreateBucket, setDisplayCreateBucket] = useRecoilState(
    displayCreateBucketState
  );
  const [displayCreateButton, setDisplayCreateButton] = useRecoilState(
    displayCreateButtonState
  );
  const [fetchResults, setFetchResults] = useRecoilState(bucketListTableResultsState);
  const tableResults = useRecoilValue(bucketListTableResultsState);
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
  }, [fetchResults, tableValues.head]);

  const handleButtonClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
  };

  const handleTableItemClick = (index) => {
    setSelectedBucket({
      name: fetchResults[index].name,
      location: fetchResults[index].location,
      size: fetchResults[index].size,
      index,
    });
    setVisiblePage("my-storage");
  };

  return [
    displayCreateBucket,
    displayCreateButton,
    tableResults,
    handleButtonClick,
    handleTableItemClick,
    tableValues,
  ];
};

export default BucketListBehavior;
