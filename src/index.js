import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import reducer from "./reducers";
import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")
  document.getElementById("root")
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
// reportWebVitals();
