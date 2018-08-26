import React from "react";
import PropTypes from "prop-types";

const FlightDetails = ({ flightNumber, departure, arrival }) => (
    <tr>
        <td>{flightNumber}</td>
        <td>{departure}</td>
        <td>{arrival}</td>
    </tr>
);

FlightDetails.propTypes = {
    flightNumber: PropTypes.string,
    departure: PropTypes.string,
    arrival: PropTypes.string
};

FlightDetails.defaultProps = {
    flightNumber: "",
    departure: "",
    arrival: ""
};
export default FlightDetails;
