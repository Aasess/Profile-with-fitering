import { createStore, applyMiddleware, compose } from "redux";

//THUNK MIDDLEWARE
import thunk from "redux-thunk";

//LOADER
import { loadingBarMiddleware } from "react-redux-loading-bar";

//ROOT REDUCER
import { rootReducer } from "./reducers";

let myMiddleware: any;

const production = process.env.NODE_ENV !== "development";

//in production remove componse so that it doesn't appear on developer tools
if (production) {
  myMiddleware = applyMiddleware(
    thunk,
    loadingBarMiddleware({
      promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
    })
  );
}

//for development add redux to developer tools
else {
  const composeEnhancers =
    (window && (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;
  myMiddleware = composeEnhancers(
    applyMiddleware(
      thunk,
      loadingBarMiddleware({
        promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
      })
    )
  );
}

export const store = createStore(rootReducer, myMiddleware);
