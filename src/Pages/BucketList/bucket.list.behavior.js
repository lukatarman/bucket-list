import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
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
  const [tableResults, setTableResults] = useRecoilState(bucketListTableResultsState);
  const setSelectedBucket = useSetRecoilState(selectedBucketState);
  const setVisiblePage = useSetRecoilState(visiblePageState);

  const [tableValues, setTableValues] = useState({
    head: ["Name", "Location"],
    rows: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuckets();
      setTableResults(response.data);
    };

    fetchData();
  }, [setTableResults]);

  useEffect(() => {
    const renderRows = tableResults.map((result) => [result.name, result.location]);

    setTableValues({ head: tableValues.head, rows: renderRows });
  }, [tableResults, tableValues.head]);

  const handleButtonClick = () => {
    setDisplayCreateButton(false);
    setDisplayCreateBucket(true);
  };

  const handleTableItemClick = (index) => {
    setSelectedBucket({
      name: tableResults[index].name,
      location: tableResults[index].location,
      size: tableResults[index].size,
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
