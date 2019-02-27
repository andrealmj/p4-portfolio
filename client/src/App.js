import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';

import Login from "./components/Login";
import Main from "./components/Main";
import PublicViews from "./components/publicViews/publicViews";

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

class App extends Component {
  render() {
    return (
      <div className="App">
				<BrowserRouter>
          <Switch>
						<Route exact path="/login" component={Login} />
            <Route path="/users/:id" component={PublicViews}/>
            {/* <Route path="/users/" component={PublicViews} /> */}
						<Route path="/" component={Main} />
					</Switch>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
