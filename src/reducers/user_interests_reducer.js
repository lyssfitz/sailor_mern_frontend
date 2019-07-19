const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "USER_INTERESTS_LIST":
            return action.payload;
        default:
            return state;
    }
}