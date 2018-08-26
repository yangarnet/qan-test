import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    flights: flightReducer,
    error: errorReducer
});

export default rootReducer;
