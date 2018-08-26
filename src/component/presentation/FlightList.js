import React from "react";
import PropTypes from "prop-types";
import FlightDetails from "./FlightDetails";

const FlightList = ({ flights, loading }) => {
    let flightDetailList = null;
    let noFlightAvailable = null;
    const noFlight = !loading && flights.length === 0;
    const haveFlight = !loading && flights.length > 0;
    if (haveFlight) {
        flightDetailList = flights.map(flight => {
            return (
                <FlightDetails
                    key={flight.id}
                    flightNumber={flight.flightNumber}
                    departure={flight.departure}
                    arrival={flight.arrival}
                />
            );
        });
    }
    if (noFlight) {
        noFlightAvailable = <h3>sorry, no flight found..</h3>;
    }

    return (
        <div>
            {haveFlight && (
                <table className="flight-list">
                    <thead>
                        <tr className="header">
                            <th className="custom-width">Flight</th>
                            <th className="custom-width">Depart</th>
                            <th className="custom-width">Arrive</th>
                        </tr>
                    </thead>
                    <tbody>{flightDetailList}</tbody>
                </table>
            )}
            {noFlight && noFlightAvailable}
        </div>
    );
};

FlightList.propTypes = {
    flights: PropTypes.array.isRequired
};

FlightList.defaultProps = {
    flights: []
};

export default FlightList;
