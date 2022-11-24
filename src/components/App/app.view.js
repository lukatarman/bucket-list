import { getData } from "../../adapters/http-client-adapter.js";
import { useState } from "react";
import "../../assets/global.css";

const App = () => {
  const [myTest, setMyTest] = useState("");
  useState(() => {
    const fetchData = async () => {
      const response = await getData();
      console.log(response);
    };

    fetchData();
  });
  return (
    <div>
      <nav>Secure could storage</nav>
      <div>Bucket list</div>
      <div>Actual bucket list</div>
    </div>
  );
};

export default App;
