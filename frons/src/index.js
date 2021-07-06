import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import './assets/scss/style.scss';
//import './index.css';

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);
// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();