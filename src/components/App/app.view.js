import { getData } from "../../adapters/http-client-adapter.js";
import { useState } from "react";
import BucketList from "../../Pages/BucketList/bucket.list.view.js";
import MyStorage from "../../Pages/MyStorage/my.storage.view.js";
import "../../assets/global.css";

const App = () => {
  return (
    <div>
      <nav>Secure could storage</nav>
      <BucketList />
      <MyStorage />
    </div>
  );
};

export default App;
