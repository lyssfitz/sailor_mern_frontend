const defaultState = {
  loading: false,
  visible: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "INTERESTS_MODAL":
      return { ...state, loading: action.payload.loading, visible: action.payload.visible };
    default:
      return state;
  }
};