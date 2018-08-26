import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import FlightDetails from "../FlightDetails";

describe("FlightDetails", () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            flightNumber: "abc",
            departure: "Sydney",
            arrival: "Melbourne"
        };

        wrapper = shallow(<FlightDetails {...props} />);
    });

    it("should render FlightDetails properly", () => {
        let tds = wrapper.find("td");
        expect(tds.length).to.be.eq(3);
        expect(tds.at(0).text()).to.be.eq("abc");
        expect(tds.at(1).text()).to.be.eq("Sydney");
        expect(tds.at(2).text()).to.be.eq("Melbourne");
    });
});
