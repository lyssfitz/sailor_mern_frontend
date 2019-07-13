import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import modalReducer from "./modal_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: formReducer
});
