import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "components/Header/HeaderComponent";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" render={() => <HomePage />} />
    </BrowserRouter>
  );
}

export default App;
