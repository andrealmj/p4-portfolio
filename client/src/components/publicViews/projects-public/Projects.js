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
    this.updateFromDb(this.props.match.params.id);
  }

  updateFromDb(userId) {
    Axios({
      method: "GET",
      url: `/users/${userId}`,
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
        project_data: val.data.project_data,
        name: val.data.about.name
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

            <li>
              <img src={project.img_link} style={{ maxWidth: "200px" }} alt="screenshot" />
            </li>

            <li><b>Title</b>: {project.title}</li>
            <li><b>Description</b>: {project.description}</li>
            <li><b>Project Link</b>: {project.project_link}</li>
            
            <hr />
          </div>
        );
      });

      return (
        <div style={{margin: "40px"}}>
          <h5>My Projects</h5>
          <br />

          <ul>{projectsList}</ul>
        </div>
      );
    } else {
      //if no project data exists (i.e. user has no projects)
      return (
        <div style={{margin: "40px"}}>
          <h5>My Projects</h5>
          <hr />
          
          {this.state.name} currently has no projects.
        </div>
      );
    }
  }
}

export default Projects;
