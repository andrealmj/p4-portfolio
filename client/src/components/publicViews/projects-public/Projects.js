import React, { Component } from "react";
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
      },
      name: ""
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
        project_data: {
          title: this.state.title,
          description: this.state.description,
          project_link: this.state.project_link,
          img_link: this.state.img_link
        },
        name: this.state.name
      }
    }).then(val => {
      console.log(val.data.project_data);
      this.setState({
        project_data: val.data.project_data
      });
    });
  }

  render() {
    const projects = this.state.project_data;
    console.log("PROJECT DATA", projects);


    if (this.state.project_data.length > 0) {
      const projectsList = projects.map(project => {
        console.log(project)
        return (
          <div key={project.id}>

            <li>Title: {project.title}</li>
            <li>Description: {project.description}</li>
            <li>Project Link: {project.project_link}</li>
            <li>
              Screenshot:{" "}
              <img src={project.img_link} style={{ maxWidth: "200px" }} />
            </li>
            <hr />
          </div>
        );
      });

      return (
        <div>
          <h1>My Projects</h1>
          <br />

          <ul>{projectsList}</ul>
        </div>
      );
    } else {
      //if no project data exists (i.e. user has no projects)
      return (
        <div>
          <h1>My Projects</h1>
          <hr />
          
          {this.state.name} currently has no projects.
        </div>
      );
    }
  }
}

export default Projects;
