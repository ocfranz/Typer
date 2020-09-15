import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./stores/store";
ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
      />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
