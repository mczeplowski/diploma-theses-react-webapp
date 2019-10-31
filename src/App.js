import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./core/components/Header";
import HomePage from "./pages/HomePage";
import ThesePage from './pages/ThesePage'
import { useStore } from './store';

function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          <Route
            path="/these/:id"
            render={props => <ThesePage id={props.match.params.id} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
