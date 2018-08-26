export const fetchAllFlightDone = () => {
    return {
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
        ]
    };
};
