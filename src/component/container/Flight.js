import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAllFlights } from "../../actions/flightActions";
import FlightList from "../presentation/FlightList";

class Flight extends Component {
    componentDidMount() {
        if (process.env.NODE_ENV !== "test") this.props.fetchAllFlights();
    }

    render() {
        const { flights, loading, error } = this.props;
        const hasError = Object.keys(error).length > 0;
        return (
            <div>
                {loading && <h3>Loading......</h3>}
                {hasError && <h3>Opps......Error</h3>}
                {<FlightList flights={flights} loading={loading} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { flights, error } = state;
    return {
        flights: flights.flights,
        loading: flights.loading,
        error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFlights: () => dispatch(fetchAllFlights())
    };
};

Flight.propTypes = {
    flights: PropTypes.array.isRequired,
    fetchAllFlights: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object
};

Flight.defaultProps = {
    flights: [],
    error: {},
    loading: false
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flight);
