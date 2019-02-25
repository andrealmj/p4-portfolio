import React, { Component } from "react";
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky">
          <a class="navbar-brand" href="#">
            Portfolio Builder by Andrea
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Me
                </a>
              </li> 

              <li class="nav-item">
                <a class="nav-link" href="#">
                  My Work
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>

            </ul>

          </div>
        </nav>

        <h1>Helloooooooo</h1>
      </div>
    );
  }
}

export default App;
