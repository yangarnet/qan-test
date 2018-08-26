import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];
const componseEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        componseEnhancers(applyMiddleware(...middleware))
    );
};

export default appStore;
