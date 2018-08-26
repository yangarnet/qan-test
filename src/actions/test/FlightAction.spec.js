import { expect } from "chai";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import FLIGHT_ACTIONS from "../type";
import { fetchAllFlightDone } from "./ServerResponseMock";
import { fetchAllFlights } from "../flightActions";

describe("Flight Actions", () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it("should dispatch FETCH_ALL_FLIGHTS_RESOLVE", async () => {
        moxios.stubRequest("/flights?_limit=10", {
            status: 200,
            response: JSON.stringify(fetchAllFlightDone())
        });

        const expectedActions = [
            { type: FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_PENDING },
            {
                type: FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_RESOLVE,
                payload: JSON.stringify(fetchAllFlightDone())
            }
        ];

        const store = mockStore({});

        await store.dispatch(fetchAllFlights());

        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).to.deep.equal(
            expectedActions.map(action => action.type)
        );

        expect(
            dispatchedActions.filter(
                action =>
                    action.type === FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_RESOLVE
            ).payload
        ).to.deep.equal(
            expectedActions.filter(
                action =>
                    action.type === FLIGHT_ACTIONS.FETCH_ALL_FLIGHTS_RESOLVE
            ).payload
        );
    });
});
