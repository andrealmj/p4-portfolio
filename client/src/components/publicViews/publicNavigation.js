import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

import Logo from "../logo-crop-trbg.png";

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      email: null,
      name: null
    };

    this.updateFromDb = this.updateFromDb.bind(this);
  }

  componentDidMount() {
    console.log("abcdefg id:", this.props.abcde.params.id)
    this.updateFromDb(this.props.abcde.params.id, this.props.abcde.params.email, this.props.abcde.params.name);
  }

  updateFromDb(userId) {
    Axios({
      method: "GET",
      url: `/users/${userId}`,
      data: {
        userId: this.state.userId,
        email: this.state.email,
        name: this.state.name
      }
    }).then(val => {
      console.log("VAL DATA andrea12312", val.data);
      this.setState({
        userId: val.data.about.id,
        email: val.data.about.email,
        name: val.data.about.name
      });
    })
  }
  
  render() {
    console.log("user ID is: ",this.state.userId);
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light sticky" style={{backgroundColor: "#FDD101"}}>
            <NavLink className="navbar-brand" to={`/users/${this.state.userId}`}>
              <img src={Logo} style={{width:"43px", height:"43px"}} alt="logo" />Portfolio Builder
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
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={`/users/${this.state.userId}/projects`}>
                    Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href={`mailto:${this.state.email}?subject=Hello ${this.state.name}!&body=I've seen your portfolio website and think it's quite impressive. I want to hire you! Let's talk.`}>
                    Contact
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }


export default PublicNavigation;
