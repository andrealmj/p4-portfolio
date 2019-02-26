import React, { Component } from "react";
import { api } from "../functions";
import Axios from "axios";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            project_data: { 
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
            Axios({
                method: "GET",
                url: "/projects",
                data: { 
                    project_data: { 
                        title: this.state.title, 
                        description: this.state.description,
                        project_link: this.state.project_link,
                        img_link: this.state.img_link 
                    } 
                }
            }).then(val => 
                {console.log(val.data.project_data);
                this.setState({ 
                    project_data: val.data.project_data
                })}
                )
    }
    
    render() {
        console.log("PROJECT DATA", this.state.project_data);
        if (this.state.project_data.length > 0) {
            return (
                <div>
                    <h1>My Projects</h1>
                    <br />
                    Title: {this.state.project_data[0].title}
                    <br />
                    Description: {this.state.project_data[0].description}
                    <br />
                    Project link: {this.state.project_data[0].project_link}
                    <br />
                    Screenshot: {this.state.project_data[0].img_link}
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
        
    }
}

export default Projects;