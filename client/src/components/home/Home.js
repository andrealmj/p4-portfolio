import React, { Component } from "react";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        name: null
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
          name: this.state.name
        },
        everythingIsOk: false
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
    if (this.state.everythingIsOk) {
      return (
        <div>
          Welcome to {this.state.about.name}'s portfolio page.
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Home;
