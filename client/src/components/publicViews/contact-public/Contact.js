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

                    <form method="POST" action="http://localhost:3000/andrealmj@live.com">
                        <div class="form__input half">
                            <label for="name">Name</label>
                            <input type="text" name="Name" autocomplete="name" required />
                        </div>

                        <div class="form__input input half">
                                <label for="email">Email</label>
                                <input type="email" name="Email" autocomplete="email" required />
                        </div>

                        <div class="form__input">
                                <label for="message">Message</label>
                                <textarea type="text" name="Message" rows="7" autocomplete="message" required></textarea>
                        </div>

                        <button class="btn" type="submit">Send</button>
                    </form>

                <a href='mailto:me@company.com?subject=Hello&body=We want to hire you'>Contact</a>

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