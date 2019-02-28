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
    console.log("quack!!! user id is:", this.props.match.params.id);
    this.updateFromDb(this.props.match.params.id);
  }

  updateFromDb(userId) {
    Axios({
      method: "GET",
      url: `/users/${userId}`,
      data: {
        about: {
          name: this.state.name
        },
        everythingIsOk: true
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
        <div style={{margin: "40px"}}>
          <h5>Welcome to {this.state.about.name}'s portfolio page.</h5>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Home;
