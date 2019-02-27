import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";

import Login from "./Login.js";

import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

class Main extends Component {
    render() {
        return (
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
        )
    }
}

export default Main;