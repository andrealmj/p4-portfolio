import React, { Component } from 'react';
import Axios from 'axios';

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            project_link: "",
            img_link: "",
            titleMessage: "",
            descriptionMessage: "",
            projectLinkMessage: "",
            imgLinkMessage: ""
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleUpdate(e) {
        console.log(e.target.dataset.id);
        this.setState({
            titleMessage: "",
            descriptionMessage: "",
            projectLinkMessage: "",
            imgLinkMessage: ""
        })

        let everythingIsOk = true;

        if (this.state.title === "") {
            this.setState({ titleMessage: "Please give your project a title."});
            everythingIsOk = false;
        }

        if (this.state.description === "") {
            this.setState({ descriptionMessage: "Please give your project a description."});
            everythingIsOk = false;
        }

        if (this.state.project_link === "") {
            this.setState({ projectLinkMessage: "Please provide a link to your project."});
            everythingIsOk = false;
        }

        if (this.state.img_link === "") {
            this.setState({ imgLinkMessage: "Please provide a screenshot link."});
            everythingIsOk = false;
        }

        if (everythingIsOk) {
            console.log(e.target.dataset.id);
            Axios({
                method: "POST",
                url: `/projects/edit`,
                data: {
                    id: e.target.dataset.id,
                    title: this.state.title,
                    description: this.state.description,
                    project_link: this.state.project_link,
                    img_link: this.state.img_link
                }
            }).then(val => {
                console.log(val.status);
                this.updateFromDb();
            })
        }

        if (everythingIsOk === false) {
            e.preventDefault();
        }
        
    }

    handleChange(e) {
        if ("title" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("description" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("project_link" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("img_link" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    

    render() {
        if (this.props.existingProjectData) {
            console.log(this.props.existingProjectData)
            return (
                <div>
                    <form onSubmit={this.handleUpdate} onChange={this.handleChange} data-id={this.props.existingProjectData.id}>

                        <div class="form-group">
                            <label for="title">Title</label>
                            <input name="title" type="text" class="form-control" id="title" placeholder={this.props.existingProjectData.title} />
                            <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                                {this.state.titleMessage}
                            </div>
                        </div>
                
                        <div className="form-group blue-border-focus">
                            <label for="exampleFormControlTextarea5">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" name="description" placeholder={this.props.existingProjectData.description} />
                            <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                                {this.state.descriptionMessage}
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="project_link">Project Link</label>
                            <input name="project_link" type="text" class="form-control" id="project_link" placeholder={this.props.existingProjectData.project_link} />
                            <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                                {this.state.projectLinkMessage}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="img_link">Screenshot Link</label>
                            <input name="img_link" type="text" class="form-control" id="img_link" placeholder={this.props.existingProjectData.img_link} />
                            <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                                {this.state.imgLinkMessage}
                            </div>
                        </div>
    
                        <button inputType="submit" class="btn btn-outline-dark float-right">Save</button>
                    </form>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
        
    }
}

export default EditProject;