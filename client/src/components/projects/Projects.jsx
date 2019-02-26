import React, { Component } from "react";
import { api } from "../functions";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects: { 
                title: null,
                description: null,
                project_link: null,
                img_link: null
            }
        }
    }

    componentDidMount() {
        this.updateFromDb();
    }

    updateFromDb() {
		api("GET", "projects").then(val => {
			if (val.data.success === false) {
				return;
			} else {
				this.setState({ projects: val.data });
			}
		});
    }
    
    render() {
        return (
            <div>
                <h1>My Projects</h1>
                <br />
                Title: {this.state.projects.title}
                <br />
                Description: {this.state.projects.description}
                <br />
                Project link: {this.state.projects.project_link}
                <br />
                Screenshot: {this.state.projects.img_link}
            </div>
        )
    }
}

export default Projects;