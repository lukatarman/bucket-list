const AppBehavoir = () => {
  const handleBrandClick = () => {
    setVisiblePage("bucket-list");
  };

  const render = () => {
    if (visiblePage === "bucket-list")
      return (
        <BucketList
          setSelectedBucket={setSelectedBucket}
          setVisiblePage={setVisiblePage}
        />
      );
    if (visiblePage === "my-storage")
      return (
        <MyStorage selectedBucket={selectedBucket} setVisiblePage={setVisiblePage} />
      );
  };

  return [handleBrandClick, render];
};

export default AppBehavoir;
