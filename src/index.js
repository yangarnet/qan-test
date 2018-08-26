import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReduxRoot from "./ReduxRoot";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <ReduxRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxRoot>,
    document.getElementById("root")
);
registerServiceWorker();
