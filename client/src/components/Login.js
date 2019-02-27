import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      isNewAccount: false,
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios({
      method: "GET",
      url: "/users/validate"
    }).then( res => {
      if (res.data.success) {
        this.setState({ isLoggedIn: true });
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isNewAccount) {
      if (this.state.password.length < 8) {
        this.setState({
          message: "Password needs to be at least 8 characters."
        });
      } else {
        this.dbCreateUser();
      }
    } else {
      this.dbLogIn();
    }
  }

  handleChange(e) {
    let target = e.target;
    if ("email" === target.name) {
      this.setState({ [target.name]: target.value });
    } else if ("password" === target.name) {
      this.setState({ [target.name]: target.value });
    } else if ("isNewAccount" === target.name) {
      this.setState({ [target.name]: target.checked });
    }
  }

  dbCreateUser() {
		console.log("creating new user..")

		// make a post req to create new acc
		Axios({
			method: "POST",
			url: "/users",
			data: { user: { email: this.state.email, password: this.state.password } }
		}).then( val => 
			// after creating new acc, log them in
			Axios({
				method: "POST",
				url: "/users/sign_in",
				data: { user: { email: this.state.email, password: this.state.password } }
			}).then( val => 
				{this.setState({ isLoggedIn: true });
				console.log("new user successfully logged in!")}
			).catch ( err =>
				//if cannot create new acc (eg username alr exists), display error msg
				{this.setState({
          message: "Sorry. Invalid username or password. Please try again."
				});
				console.log("Error in creating new user.", err)}
			))
  }

  dbLogIn() {
    console.log("logging in..");
    Axios({
      method: "POST",
      url: "users/sign_in",
      data: { user: { email: this.state.email, password: this.state.password } }
    }).then( val =>
      {this.setState({ isLoggedIn: true });
      console.log("logged in successfully")}
		)
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />;
    } else {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: 100 + "vh" }}
        >
          <div
            className="background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -2,
              backgroundImage: "url(./assets/logo/logo-cropped.png)",
              backgroundPosition: "center top",
              backgroundColor: "#F4F4F4",
              backgroundRepeat: "no-repeat",
              backgroundSize: "300px"
            }}
          />
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            style={{
              width: "350px",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "rgba(253, 209, 1, 0.5)",
              marginTop: "200px"
            }}
          >
            <div className="form-group">
              <label htmlFor="inputUsername">Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Enter password"
              />
            </div>
            <div className="form-check">
              <input
                name="isNewAccount"
                type="checkbox"
                className="form-check-input"
                id="checkNewAccount"
                defaultChecked={this.state.isNewAccount}
              />
              <label className="form-check-label" htmlFor="checkNewAccount">
                New User
              </label>
            </div>
            <button type="submit" value="Submit" className="btn btn-outline-dark float-right">
              Submit
            </button>
            <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
              {this.state.message}
            </div>
          </form>

          <p
            style={{
              color: "black",
              fontSize: "12px",
              position: "absolute",
              bottom: "5px"
            }}
          >
            Logo made with{" "}
            <a
              href="https://www.designevo.com/en/"
              title="Free Online Logo Maker"
              style={{ color: "black" }}
            >
              DesignEvo
            </a>
          </p>
        </div>
      );
    }
  }
}

export default Login;
