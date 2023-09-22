import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import App from "./App";
import { reduxStore } from "./redux/store";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
