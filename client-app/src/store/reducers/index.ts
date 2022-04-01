import { combineReducers } from "redux";

//LOADER
import { loadingBarReducer } from "react-redux-loading-bar";

//REDUCER
import { profileReducer } from "./profileReducer";

//INTERFACE
import { IProfileState } from "ts/interfaces/store";

export const rootReducer = combineReducers<IProfileState | any>({
  loadingBar: loadingBarReducer,
  profileReducer,
});
