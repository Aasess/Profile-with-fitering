import React from "react";

//SCSS
import "scss/styles.scss";

//COMPONENTS
import Profile from "scenes/profile";

//REUDX
import { Provider } from "react-redux";
import { store } from "store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
