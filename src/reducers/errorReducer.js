import FLIGHT_ACTIONS from "../actions/type";

const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case FLIGHT_ACTIONS.ADD_FLIGHT_REJECT:
        case FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_REJECT:
        case FLIGHT_ACTIONS.SEARCH_FLIGHT_REJECT:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default errorReducer;
