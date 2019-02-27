import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Axios from "axios";

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };

    this.updateFromDb = this.updateFromDb.bind(this);
  }

  componentDidMount() {
    this.updateFromDb();
  }

  updateFromDb() {
    Axios({
      method: "GET",
      url: "/users/:id",
      data: {
        userId: this.state.userId
      }
    }).then(val => {
      console.log("VAL DATA andrea", val.data);
      this.setState({
        userId: val.data.about.id
      });
    })
  }
  
  render() {
    console.log(this.state.userId);
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
            <NavLink className="navbar-brand" to={`/users/${this.state.userId}`}>
              Portfolio Builder
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to={`/users/${this.state.userId}`}>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={`/users/${this.state.userId}/abouts`}>
                    About Me
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={`/users/${this.state.userId}/projects`}>
                    My Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={`/users/${this.state.userId}/contacts`}>
                    Contact
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }


export default PublicNavigation;
