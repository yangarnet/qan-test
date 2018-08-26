import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import FlightList from "../FlightList";
import FlightDetails from "../FlightDetails";

describe("FlightList", () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            flights: [
                {
                    id: 2,
                    flightNumber: "test2",
                    departure: "town c",
                    arrival: "town d"
                }
            ],
            loading: false
        };

        wrapper = shallow(<FlightList {...props} />);
    });

    it("should render FlightList", () => {
        expect(wrapper.find(".flight-list")).to.be.not.null;
        expect(wrapper.find(".flight-list").length).to.be.eq(1);
        expect(wrapper.find(FlightDetails).length).to.be.eq(1);
    });
});
