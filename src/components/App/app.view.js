import { getData } from "../../adapters/http-client-adapter.js";
import { useState } from "react";

const App = () => {
  const [myTest, setMyTest] = useState("");
  useState(() => {
    const fetchData = async () => {
      const response = await getData();
      console.log(response);
    };

    fetchData();
  });
  return <div>Test</div>;
};

export default App;
