import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';

import Navigation from "./components/Navigation";

import Login from "./components/Login";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
				<BrowserRouter>
          <div>
            <Navigation />

            <Switch>
              <Route path="/login" component={Login} />

              <Route exact path="/" component={Home} />
              <Route path="/abouts" component={About} />
              <Route path="/contacts" component={Contact} />
              <Route path="/projects" component={Projects} />

              <Route component={Error} />

					  </Switch>

          </div>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
