import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalsstyle";
import { Music } from "./pages/Music";
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
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
