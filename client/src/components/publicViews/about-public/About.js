import React, { Component } from "react";
import Axios from "axios";

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
        <div>
          <div className="about">
            <h1>About Me:</h1>
            <br />
            <h3>ALLOW IMAGE UPLOAD HERE !!! Cloudinary</h3>
            <br />
            {this.state.about.bio}
            <hr />

            ID: {this.state.about.id}
            <br />

            Name: {this.state.about.name}
            <br />

            E-mail: {this.state.about.email}
            <br />

            Phone number: {this.state.about.phone}
            <br />
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
