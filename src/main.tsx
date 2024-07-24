import "./style/index.css";

import Layout from "./componens/layout.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold underline"></h1>
    <Layout />
  </React.StrictMode>
);
