import React from "react";
import { Provider } from "react-redux";
import appStore from "./store/Index";

const ReduxRoot = ({ children, initialState = {} }) => (
    <Provider store={appStore(initialState)}>{children}</Provider>
);

export default ReduxRoot;
