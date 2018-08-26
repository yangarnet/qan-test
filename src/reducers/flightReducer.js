import FLIGHT_ACTIONS from "../actions/type";

const flightReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_PENDING:
        case FLIGHT_ACTIONS.SEARCH_FLIGHT_PENDING:
            return Object.assign({}, state, { loading: true });
        case FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_REJECT:
        case FLIGHT_ACTIONS.SEARCH_FLIGHT_REJECT:
            return {
                ...state,
                loading: false
            };
        case FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_RESOLVE:
        case FLIGHT_ACTIONS.SEARCH_FLIGHT_RESOLVE:
            return {
                ...state,
                flights: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default flightReducer;
