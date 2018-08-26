import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchFlightByCityName } from "../actions/flightActions";
import SearchInput from "./SearchInput";
import Button from "./Button";

class SearchFlight extends Component {
    constructor(props) {
        super(props);
        this.doSearch = this.doSearch.bind(this);
        this.inputRef = React.createRef();
    }

    componentDidMount() {}

    doSearch() {
        console.log(this.inputRef.current.state);
        this.props.searchFlight(this.inputRef.current.state.data);
    }

    render() {
        return (
            <div>
                <h2>Flight Information</h2>
                <div className="row">
                    <SearchInput ref={this.inputRef} />
                    <Button
                        buttonName="Search Flights"
                        onClick={this.doSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchFlight: cityName => dispatch(searchFlightByCityName(cityName))
    };
};

SearchFlight.propTypes = {
    searchFlight: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(SearchFlight);
