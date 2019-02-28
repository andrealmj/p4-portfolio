import React, { Component } from "react";
import Axios from "axios";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {
                name: null
            },
            everythingIsOk: false
        };

        this.updateFromDb = this.updateFromDb.bind(this);
    }

    componentDidMount() {
        console.log("this is the data. id =", this.props.match.params.id)
        this.updateFromDb(this.props.match.params.id);
    }

    updateFromDb(userId) {
        Axios({
            method: "GET",
            url: `/users/${userId}`,
            data: {
                about: {
                    name: this.state.name
                }
            }
        }).then(val => {
            console.log("CONTACTPG", val.data.about);
            this.setState({
                about: val.data.about,
                everythingIsOk: true
            })
        })
    }


    render() {
        if (this.state.everythingIsOk) {
            return (
                <div style={{margin: "40px"}}>
                    <h5>Get in touch with {this.state.about.name}!</h5>
                    <form>
                    <input type="text" placeholder="Your name" /><br />
                    <input type="text" placeholder="Your email" /><br />
                    <input type="text" placeholder="Subject" /><br />
                    <textarea rows="4" cols="50" placeholder="Message" /><br />
                    <button type="submit">Submit</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>Loading..</div>
            )
        }
        
    }
}

export default Contact;