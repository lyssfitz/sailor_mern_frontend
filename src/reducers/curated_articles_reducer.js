const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "CURATED_ARTICLES_LIST":
            return action.payload;
        default:
            return state;
    }
}