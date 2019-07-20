const defaultState = {
  visible: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "INTERESTS_MODAL":
      return { ...state, visible: action.payload.visible };
    default:
      return state;
  }
};