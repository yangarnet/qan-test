import React, { Component } from "react";
import Flight from "./component/container/Flight";
import SearchFlight from "./component/SearchFlight";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="content">
                <SearchFlight />
                <Flight />
            </div>
        );
    }
}

export default App;
