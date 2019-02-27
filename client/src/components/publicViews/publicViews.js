import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PublicNavigation from "../publicViews/publicNavigation";

import Home from "../publicViews/home-public/Home";
import About from "../publicViews/about-public/About";
import Contact from "../publicViews/contact-public/Contact";
import Projects from "../publicViews/projects-public/Projects";
import Error from "../Error";

const PublicViews = ({ match }) => (
    <div>
        <PublicNavigation />

        <Switch>
            <Route exact path="/users/:id" component={Home} />
            <Route path="/users/:id/abouts" component={About} />
            <Route path="/users/:id/contacts" component={Contact} />
            <Route path="/users/:id/projects" component={Projects} />

            <Route component={Error} />
        </Switch>
    </div>
)

// class PublicViews extends Component {
//     render() {
//         return (
//             <div>
//                 <PublicNavigation />

//                 <Switch>

//                     <Route exact path="/users/:id" component={Home} />
//                     <Route path="/users/:id/abouts" component={About} />
//                     <Route path="/users/:id/contacts" component={Contact} />
//                     <Route path="/users/:id/projects" component={Projects} />

//                     <Route component={Error} />

//                 </Switch> 
//             </div>
//         )
//     }
// }

export default PublicViews;