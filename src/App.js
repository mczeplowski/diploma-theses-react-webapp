import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "components/Header/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" render={() => <div>elo</div>} />
    </BrowserRouter>
  );
}

export default App;
