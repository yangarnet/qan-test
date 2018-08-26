import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import App from "./App";
import Flight from "./component/container/Flight";
import SearchFlight from "./component/SearchFlight";
import ReduxRoot from "./ReduxRoot";

describe("Render APP", () => {
    it("should render the react app without crashing", () => {
        const preloadState = {
            flights: {
                flights: [
                    {
                        id: 1,
                        flightNumber: "test1",
                        departure: "town A",
                        arrival: "town B"
                    },
                    {
                        id: 2,
                        flightNumber: "test2",
                        departure: "town c",
                        arrival: "town d"
                    }
                ],
                loading: false
            },
            error: {}
        };

        const searchFlightComponentDiMount = sinon.spy(
            SearchFlight.prototype,
            "componentDidMount"
        );
        const flightComponentDidMount = sinon.spy(
            Flight.prototype,
            "componentDidMount"
        );

        let wrapper = mount(
            <ReduxRoot initialState={preloadState}>
                <App />
            </ReduxRoot>
        );

        expect(wrapper.find(".content").length).to.be.eq(
            1,
            "only one div with class as .content rendered"
        );
        expect(Flight.prototype.componentDidMount.callCount).to.be.eq(1);
        expect(SearchFlight.prototype.componentDidMount.callCount).to.be.eq(1);
        expect(wrapper.find(SearchFlight).length).to.be.eq(
            1,
            "only one SearchFlight component is rendered"
        );
        expect(wrapper.find(Flight).length).to.be.eq(
            1,
            "only one Flight component is rendered"
        );

        wrapper.unmount();
    });
});
