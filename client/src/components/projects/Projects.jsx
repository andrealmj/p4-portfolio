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
        const projects = this.state.project_data;
        console.log("PROJECT DATA", projects);

        

        if (this.state.project_data.length > 0) {

            const projectsList = projects.map ( project => {
                return (
                    <div>
                        <li key={project.id}>Title: {project.title}</li>
                        <li key={project.id}>Description: {project.description}</li>
                        <li key={project.id}>Project Link: {project.project_link}</li>
                        <li key={project.id}>Screenshot: <img src={project.img_link} /></li>
                    </div>
                )
            })

            return (
                <div>
                    <h1>My Projects</h1>
                    
                    <ul>{projectsList}</ul>
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