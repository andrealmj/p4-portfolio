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
        phone: null,
        everythingIsOk: false
      },
      showEditForm: false
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
          phone: this.state.phone
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
        <div>
          <div className="about">
            <h1>About Me:</h1>
            <br />
            <h3>ALLOW IMAGE UPLOAD HERE !!! Cloudinary</h3>
            <br />
            {this.state.about.bio}
            <hr />
            Name: {this.state.about.name}
            <br />
            E-mail: {this.state.about.email}
            <br />
            Phone number: {this.state.about.phone}
            <br />
          </div>

          <button type="button" className="btn btn-outline-dark">
            Edit
          </button>

          {/* Button Trigger Modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            EDIT MODAL
          </button>

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
        <div>
          <h1>About Me:</h1>
          <br />
          Loading...
        </div>
      );
    }
  }
}

export default About;
