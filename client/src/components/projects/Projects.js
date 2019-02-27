import React, { Component } from "react";
import Axios from "axios";
import AddProject from "./AddProject";

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
    };
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
        return (
          <div key={project.id}>
            <button class="btn btn-outline-dark float-right">
              Delete this project
            </button>
            <button class="btn btn-outline-dark float-right">
              Edit this project
            </button>
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

          {/* Button Trigger Modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            Add A Project
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalScrollableTitle">
                    Add A Project
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <AddProject />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <ul>{projectsList}</ul>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Projects;
