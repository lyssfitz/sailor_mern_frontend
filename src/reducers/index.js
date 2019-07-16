import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import modalReducer from "./modal_reducer"
import interestsReducer from "./interests_reducer"
import articlesReducer from "./articles_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  interests: interestsReducer,
  articles: articlesReducer,
  form: formReducer
});
