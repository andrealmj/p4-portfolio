import React, { Component } from 'react';

class AddProject extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <form>
                    Title: <input name="title" type="text" />
                    <br />

                    <div className="form-group blue-border-focus">
                        <label for="exampleFormControlTextarea5">Description:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" name="description"></textarea>
                    </div>
                    <br />

                    Project Link: <input name="project_link" type="text" />
                    <br />

                    Screenshot Link: <input name="img_link" type="text" placeholder="Eventually utilise Cloudinary here" />
                    <br />

                    <button inputType="submit" class="btn btn-primary">Add Project</button>

                </form>
            </div>
        )
    }
}

export default AddProject;