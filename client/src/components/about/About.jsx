import React, { Component } from "react";
import { api } from "../functions";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            about: { email: [] }
        }
    }

    componentDidMount() {
        this.updateFromDb();
    }

    updateFromDb() {
		api("GET", "abouts").then(val => {
			if (val.data.success === false) {
				return;
			} else {
				this.setState({ about: val.data });
			}
		});
	}

    render() {

        console.log(this.state.about);

        if (this.state.about.email.length > 0) {
            return (
                <div>
                    <h1>About Me:</h1>
                    <br />
                    E-mail: {this.state.about.email}
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default About;