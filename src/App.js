import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalsstyle";
import { Intro } from "./pages/Intro";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
