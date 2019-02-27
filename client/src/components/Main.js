import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Axios from "axios";

import Navigation from "./Navigation";

import Login from "./Login.js";

import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doRedirect: false
        };
    }

    componentDidMount() {
        Axios({
            method: "GET",
            url: "/users/validate"
        }).then( res => {
            if (!res.data.success) {
                this.setState({ doRedirect: true });
            }
        })
    }

    render() {
        if (this.state.doRedirect) {
            return <Redirect to="/login" />
        } else {
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
}

export default Main;