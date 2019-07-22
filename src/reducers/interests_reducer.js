const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "INTERESTS_LIST":
            return action.payload;
        default:
            return state;
    }
}