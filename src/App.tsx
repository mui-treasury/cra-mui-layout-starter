import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.svg";
import "./App.css";

import Blog from "./routes/Blog";
import Dashboard from "./routes/Dashboard";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>@mui-treasury/layout starter</p>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Link className="App-link" to="/dashboard">
              Dashboard
            </Link>
          </Grid>
          <Grid item>
            <Link className="App-link" to="/blog">
              Blog
            </Link>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
