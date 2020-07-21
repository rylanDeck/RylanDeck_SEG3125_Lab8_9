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
import ExhibitSelection from "./pages/ExhibitSelection"
import ExhibitOne from "./pages/ExhibitOne"
import ExhibitTwo from "./pages/ExhibitTwo"
import ExhibitThree from "./pages/ExhibitThree"
import ChatRoom from "./pages/ChatRoom"
import MainPageFR from "./pages/French"

import NavigationBar from "./components/NavigationBar";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/fr" component={MainPageFR} />
            <Route exact path="/Exhibits" component={ExhibitSelection} />
            <Route exact path="/ExhibitOne" component={ExhibitOne} />
            <Route exact path="/ExhibitTwo" component={ExhibitTwo} />
            <Route exact path="/ExhibitThree" component={ExhibitThree} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <ChatRoom />
      </div>

    );
  }
}

export default App;
