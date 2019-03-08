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
            userData: {
                about: null,
                project_data: null
            },
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
                localStorage.clear();
            } else {
                Axios({
                    method: "GET",
                    url: "/users/index"
                }).then( res => {
                    this.setState({ userData: res.data })
                })
            }
        })
    }

    render() {
        if (this.state.doRedirect) {
            console.log('no one is logged in. redirecting to LOGIN Pg')
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Navigation />
    
                    <Switch>
                        <Route path="/login" component={Login} />
    
                        <Route exact path="/" render={props => <Home {...props} /> } />
                        <Route path="/abouts" render={props => <About {...props} /> } />
                        <Route path="/contacts" render={props => <Contact {...props} /> } />
                        <Route path="/projects" render={props => <Projects {...props} /> } />
    
                        <Route component={Error} />
    
                    </Switch>
                </div>
            )
        }
        
    }
}

export default Main;