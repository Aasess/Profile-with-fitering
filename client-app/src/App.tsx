import React from "react";

//SCSS
import "scss/styles.scss";

//COMPONENTS
import Profile from "scenes/profile";

//REUDX
import { Provider } from "react-redux";
import configureStore from "store/configureStore";

function App() {
  return (
    <Provider store={configureStore({})}>
      <div className="container">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
