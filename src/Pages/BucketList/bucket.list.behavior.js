import { useEffect, useState } from "react";
import { getBuckets } from "../../adapters/http.client.adapter.js";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedBucketState, visiblePageState } from "../../contexts/AppContext";
import {
  bucketListTableResultsState,
  displayCreateBucketState,
  displayCreateButtonState,
} from "../../contexts/BucketListContext";
import { visibleTabState } from "../../contexts/MyStorageContext";

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
  const setVisibleTab = useSetRecoilState(visibleTabState);

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
    setVisibleTab("file-list");
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
