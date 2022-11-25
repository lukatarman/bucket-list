import BucketList from "../../pages/BucketList/bucket.list.view.js";
import MyStorage from "../../pages/MyStorage/my.storage.view.js";
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
