import React, { Component } from "react";
import Axios from "axios";

import EditAbout from "./EditAbout";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        bio: null,
        name: null,
        email: null,
        phone: null
      },
      everythingIsOk: false
    };
  }

  componentDidMount() {
    this.updateFromDb();
  }

  updateFromDb() {
    Axios({
      method: "GET",
      url: "/abouts",
      data: {
        about: {
          bio: this.state.bio,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          id: this.state.id
        }
      }
    }).then(val => {
      console.log(val.data.about);
      this.setState({
        about: val.data.about,
        everythingIsOk: true
      });
    });
  }

  render() {
    console.log(this.state.about);

    if (this.state.everythingIsOk) {
      return (
        <div style={{margin: "40px"}}>
          <div className="about">
            <h5>About Me:</h5>
            <br />
            <cite>{this.state.about.bio}</cite>
            <hr />

            Name: {this.state.about.name}
            <br />

            E-mail: {this.state.about.email}
            <br />

            Phone number: {this.state.about.phone}
            <br />
          </div>

          {/* Button Trigger Modal */}
          <button
            type="button"
            className="btn btn-outline-dark"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            Edit Info
          </button>
          
          <p style={{paddingTop: "20px"}}>
          Click <a href={`/users/${this.state.about.id}`} target="_blank">here</a> to see what your portfolio looks like to the world!
          </p>
          
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalScrollableTitle">
                    About Me
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <EditAbout existingAbout={this.state.about}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{margin: "40px"}}>
          <h5>About Me:</h5>
          <br />
          Loading...
        </div>
      );
    }
  }
}

export default About;
