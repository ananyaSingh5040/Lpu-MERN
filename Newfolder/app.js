import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/components/Dashboard";

const domRoot = document.getElementById("dom-root");
const parent = ReactDOM.createRoot(domRoot);
const App = () => {
  return (
    <>
    <Dashboard/>
   </>
  );
};
parent.render(App());
