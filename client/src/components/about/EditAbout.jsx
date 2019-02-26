import React, { Component } from 'react';
import Axios from 'axios';

class EditAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: null,
            name: null,
            email: null,
            phone: null,
            emailMessage: "",
            phoneMessage: ""
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
            phoneMessage: ""
        });

        let everythingIsOk = true;

        if ( !this.state.email.includes("@") ) {
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
                everythingIsOk = true;
            })
        }

        if (everythingIsOk === false) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div id="about">
                <form onSubmit={this.handleAddItem} onChange={this.handleChange}>
                
                Name: <input name="name" type="text" />
                <br />

                <div class="form-group blue-border-focus">
                    <label for="exampleFormControlTextarea5">About me:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea5" rows="3" name="bio"></textarea>
                </div>
                <br />

                Email: <input name="email" type="text" />
                <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                    {this.state.emailMessage}
                </div>
                <br />
                Phone: <input name="phone" type="text" />
                <div style={{ fontSize: 12 + "px", height: 15 + "px" }}>
                    {this.state.phoneMessage}
                </div>
                
                <button inputType="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        )
    }
}

export default EditAbout;