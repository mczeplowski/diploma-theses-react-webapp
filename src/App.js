import React from "react";
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from 'redux-starter-kit';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./core/components/Header";
import HomePage, { controlsReducer } from "./pages/HomePage";

const reducer = combineReducers({
  controls: controlsReducer
});
const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={() => <HomePage />} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
