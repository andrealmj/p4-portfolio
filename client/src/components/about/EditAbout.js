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
            this.setState({ nameMessage: "Please enter your name!" });
            everythingIsOk = false;
        }

        if (this.state.bio === "") {
            this.setState({ bioMessage: "Please tell us about yourself." });
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
                <div id="about">
                    <form onSubmit={this.handleAddItem} onChange={this.handleChange}>
                    
                    Name: <input name="name" type="text" placeholder={this.props.existingAbout.name}/>
                    <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                        {this.state.nameMessage}
                    </div>
                    <br />
    
                    <div className="form-group blue-border-focus">
                        <label for="exampleFormControlTextarea5">About me:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" name="bio" placeholder={this.props.existingAbout.bio}></textarea>
                    </div>
                    <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                        {this.state.bioMessage}
                    </div>
                    <br />
    
                    Email: <input name="email" type="text" placeholder={this.props.existingAbout.email}/>
                    <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                        {this.state.emailMessage}
                    </div>
                    <br />
    
                    Phone: <input name="phone" type="text" placeholder={this.props.existingAbout.phone}/>
                    <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                        {this.state.phoneMessage}
                    </div>
                    
                    <button inputType="submit" className="btn btn-primary">Edit</button>
                    </form>
                </div>
            )
        } else {
            return <div>Loading..</div>
        }
    }
}

export default EditAbout;