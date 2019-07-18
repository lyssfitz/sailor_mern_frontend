import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import interestsModalReducer from "./interests_modal_reducer"
import interestsReducer from "./interests_reducer"
import articlesReducer from "./articles_reducer"
import articleModalReducer from "./article_modal_reducer"
import userReducer from "./user_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  interests: interestsReducer,
  interestsModal: interestsModalReducer,
  articles: articlesReducer,
  articleModal: articleModalReducer,
  user: userReducer,
  form: formReducer
});