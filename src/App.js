import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./globalsstyle";
import { Giphy } from "./pages/Giphy";
import { Matchday } from "./pages/Matchday";
import { Music } from "./pages/Music";
import { Welcome } from "./pages/Welcome";
import NextMatch from "./pages/NextMatch";

function App() {
  const queryClient = new QueryClient();
  const name = localStorage.getItem("Name");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/">
              {name ? <Redirect to="/music" /> : <Welcome />}
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/matchday">
              <Matchday />
            </Route>
            <Route path="/nextmatch">
              <NextMatch />
            </Route>
            <Route path="/giphy">
              <Giphy />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
