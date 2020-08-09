import React, { Component } from 'react';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import MainPage from "./pages/index";
import NotFound from "./pages/NotFound";

import NavigationBar from "./components/NavigationBar";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
