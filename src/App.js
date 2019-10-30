import React from "react";
import { Provider } from 'react-redux';
import { configureStore, combineReducers, getDefaultMiddleware } from 'redux-starter-kit';
import { createEpicMiddleware } from 'redux-observable';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./core/components/Header";
import HomePage, { controlsReducer, thesesEpic, thesesReducer, paginationReducer } from "./pages/HomePage";

const reducer = combineReducers({
  controls: controlsReducer,
  theses: thesesReducer,
  pagination: paginationReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), epicMiddleware]
});

epicMiddleware.run(thesesEpic);

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
