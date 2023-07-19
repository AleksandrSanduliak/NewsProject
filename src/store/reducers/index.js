import { combineReducers } from "redux";
import { newsReducer } from "./useNews";
import { loginReducer } from "./useLogin";
const rootReducers = combineReducers({
  newsRequest: newsReducer,
  userLogin: loginReducer,
});

export default rootReducers;
