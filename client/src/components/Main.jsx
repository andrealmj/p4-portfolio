import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";

import Login from "./Login";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";

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