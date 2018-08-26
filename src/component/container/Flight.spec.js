import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import ReduxRoot from "../../ReduxRoot";
import Flight from "./Flight";
import FlightList from "../presentation/FlightList";
import FlightDetails from "../presentation/FlightDetails";

describe("Flight Container", () => {
    it("should render loading.....", () => {
        const preloadState = {
            flights: {
                flights: [],
                loading: true
            },
            error: {}
        };

        let wrapper = mount(
            <ReduxRoot initialState={preloadState}>
                <Flight />
            </ReduxRoot>
        );
        expect(wrapper.html()).to.be.not.null;
        expect(wrapper.find("h3").length).to.be.eq(1);
        expect(wrapper.find("h3").text()).to.be.eq("Loading......");

        wrapper.unmount();
    });

    it("should render Opps.....", () => {
        const preloadState = {
            flights: {
                flights: [],
                loading: false
            },
            error: { error: "404" }
        };

        let wrapper = mount(
            <ReduxRoot initialState={preloadState}>
                <Flight />
            </ReduxRoot>
        );
        expect(wrapper.html()).to.be.not.null;
        expect(wrapper.find("h3").length).to.be.eq(2);
        expect(
            wrapper
                .find("h3")
                .at(0)
                .text()
        ).to.be.eq("Opps......Error");
        expect(
            wrapper
                .find("h3")
                .at(1)
                .text()
        ).to.be.eq("sorry, no flight found..");
        wrapper.unmount();
    });

    it("should render flight details list", () => {
        const preloadState = {
            flights: {
                flights: [
                    {
                        id: 1,
                        flightNumber: "test1",
                        departure: "town A",
                        arrival: "town B"
                    }
                ],
                loading: false
            },
            error: {}
        };

        let wrapper = mount(
            <ReduxRoot initialState={preloadState}>
                <Flight />
            </ReduxRoot>
        );
        expect(wrapper.html()).to.be.not.null;
        expect(wrapper.find(FlightList).length).to.be.equal(1);
        expect(wrapper.find(FlightDetails).length).to.be.eq(1);
        const tds = wrapper.find(FlightDetails).find("td");
        expect(tds.at(0).text()).to.be.equal("test1");
        expect(tds.at(1).text()).to.be.equal("town A");
        expect(tds.at(2).text()).to.be.equal("town B");

        wrapper.unmount();
    });
});
