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
    console.log("HEEEEEEI", this.props.match);
    this.updateFromDb(this.props.match.params.id);
  }

  updateFromDb(userId) {
    Axios({
      method: "GET",
      url: `/users/${userId}`,
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
          <div className="about" style={{margin: "40px"}}>
            <h5>About:</h5>
            <br />
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
