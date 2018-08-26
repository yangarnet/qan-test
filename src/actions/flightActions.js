import axios from "axios";
import FLIGHT_ACTIONS from "./type";

export const fetchAllFlights = () => async dispatch => {
    dispatch({
        type: FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_PENDING
    });

    try {
        const response = await axios.get("/flights?_limit=10");
        if (response) {
            dispatch({
                type: FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_RESOLVE,
                payload: response.data
            });
        }
    } catch (err) {
        dispatch({
            type: FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_REJECT,
            payload: err.response.data
        });
    }
};

export const searchFlightByCityName = desitination => async dispatch => {
    dispatch({
        type: FLIGHT_ACTIONS.SEARCH_FLIGHT_PENDING
    });

    try {
        const response = await axios.get(`/flights/?q=${desitination.trim()}`);
        console.log(JSON.stringify(response.data, null, 4));
        dispatch({
            type: FLIGHT_ACTIONS.SEARCH_FLIGHT_RESOLVE,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: FLIGHT_ACTIONS.SEARCH_FLIGHT_REJECT,
            payload: error.response.data
        });
    }
};
