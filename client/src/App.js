import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';

import Login from "./components/Login";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
				<BrowserRouter>
          <Switch>
						<Route exact path="/login" component={Login} />
						<Route path="/" component={Main} />
					</Switch>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
