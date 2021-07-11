import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./store";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
