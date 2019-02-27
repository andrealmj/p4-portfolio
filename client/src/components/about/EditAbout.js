import React, { Component } from 'react';
import Axios from 'axios';

class EditAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: "",
            name: "",
            email: "",
            phone: "",
            emailMessage: "",
            phoneMessage: "",
            bioMessage: "",
            nameMessage: ""
        };

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if ("bio" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("name" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("email" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        } else if ("phone" === e.target.name) {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleAddItem(e) {
        this.setState({
            emailMessage: "",
            phoneMessage: "",
            bioMessage: "",
            nameMessage: ""
        });

        let everythingIsOk = true;

        if (this.state.name === "") {
            this.setState({ nameMessage: "Please enter your name." });
            everythingIsOk = false;
        }

        if (this.state.bio === "") {
            this.setState({ bioMessage: "Please describe yourself." });
            everythingIsOk = false;
        }
        if ( this.state.email === "" || !this.state.email.includes("@") ) {
            this.setState({
                emailMessage: "Please enter a valid email address."
            });
            everythingIsOk = false;
        }

        if (this.state.phone.length !== 8) {
            this.setState({
                phoneMessage: "Please enter a valid Singapore phone number (8 numbers)"
            });
            everythingIsOk = false;
        }

        if (everythingIsOk) {
            Axios({
                method: "POST",
                url: "/abouts",
                data: {
                    bio: this.state.bio,
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone
                }
            }).then(val => {
                console.log(val)
            })
        }

        if (everythingIsOk === false) {
            e.preventDefault();
        }
    }

    render() {
        console.log(this.props.existingAbout);
        if (this.props.existingAbout) {
            return (
                <div id="editAbout">
                    <form onSubmit={this.handleAddItem} onChange={this.handleChange}>
                    
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input name="name" type="text" class="form-control" id="name" placeholder={this.props.existingAbout.name} />
                        <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                            {this.state.nameMessage}
                        </div>
                    </div>
    
                    <div className="form-group blue-border-focus">
                        <label for="aboutMe">About Me</label>
                        <textarea className="form-control" id="aboutMe" rows="3" name="bio" placeholder={this.props.existingAbout.bio}></textarea>
                        <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                            {this.state.bioMessage}
                        </div>
                    </div>
                                        
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input name="email" type="text" class="form-control" id="email" placeholder={this.props.existingAbout.email} />
                        <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                            {this.state.emailMessage}
                        </div>
                    </div>
    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input name="phone" type="text" class="form-control" id="phone" placeholder={this.props.existingAbout.phone} />
                        <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                            {this.state.phoneMessage}
                        </div>
                    </div>
                    
                    <button inputType="submit" className="btn btn-outline-dark float-right">Edit</button>
                    </form>
                </div>
            )
        } else {
            return <div>Loading..</div>
        }
    }
}

export default EditAbout;