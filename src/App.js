import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./core/components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" render={() => <HomePage />} />
    </BrowserRouter>
  );
}

export default App;
