import React, { Component } from "react";
import Axios from "axios";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

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

    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(e) {
    console.log(e.target.dataset.id);
    Axios({
        method: "DELETE",
        url: `/projects/${e.target.dataset.id}`
    }).then( val => {
        console.log(val.status);
        this.updateFromDb();
    })
  }

  render() {
    const projects = this.state.project_data;
    console.log("PROJECT DATA", projects);


    if (this.state.project_data.length > 0) {
      const projectsList = projects.map(project => {
        console.log(project)
        return (
          <div key={project.id}>
            <button class="btn btn-danger float-right" data-id={project.id} onClick={this.handleDelete}>Delete</button>

            {/* Button Trigger Modal for EDITING A PROJECT (change data-target)*/}
            <button
              type="button"
              className="btn btn-outline-dark float-right"
              data-toggle="modal"
              data-target={`#anything${project.id}`}
              data-id={project.id}
            >
              Edit
            </button>

            {/* Modal for EDITING A PROJECT (change id, aria-labelledby)*/}
            <div
              className="modal fade"
              id={`anything${project.id}`}
              tabindex="-1"
              role="dialog"
              aria-labelledby={`anything${project.id}title`}
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id={`anything${project.id}title`}
                    >
                      Edit This Project
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
                    <EditProject
                      existingProjectData={project}
                    />
                  </div>
                </div>
              </div>
            </div>

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

          {/* Button Trigger Modal for ADDING A PROJECT (change data-target)*/}
          <span>
            <button
              type="button"
              className="btn btn-outline-dark"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              Add A Project
            </button>
          </span>

          {/* Modal for ADDING A PROJECT (change id, aria-labelledby)*/}
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
      //if no project data exists (i.e. user has no projects)
      return (
        <div style={{margin: "40px"}}>
          <h5>My Projects</h5>
          <br />
          {/* Button Trigger Modal for ADDING A PROJECT (change data-target)*/}
          <button
            type="button"
            className="btn btn-outline-dark"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            Add A Project
          </button>
          {/* Modal for ADDING A PROJECT (change id, aria-labelledby)*/}
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
          You currently have no projects. Add some!
        </div>
      );
    }
  }
}

export default Projects;
