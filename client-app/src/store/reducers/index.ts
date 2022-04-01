import { combineReducers } from "redux";

//LOADER
import { loadingBarReducer } from "react-redux-loading-bar";

//REDUCER
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  profileReducer,
});
