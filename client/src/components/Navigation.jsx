import React, { Component } from "react";
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doRedirect: false
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Axios({
      method: "DELETE",
      url: "/users/sign_out"
    }).then(res => {
      if (res.status === 204) {
        this.setState({ doRedirect: true });
      }
    });
  }

  render() {
    if (this.state.doRedirect) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
            <NavLink className="navbar-brand" to="/">
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
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/abouts">
                    About Me
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    My Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item" onClick={this.handleLogout}>
                  <a className="nav-link">Logout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Navigation;
