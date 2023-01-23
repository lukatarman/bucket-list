import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import App from "./pages/App/app.view.js";
import "./assets/customStyles.css";

//todo add proper size calculation in backend even when adding smaller files

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
