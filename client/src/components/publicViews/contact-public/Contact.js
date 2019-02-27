import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Get in touch!</h1>
                <form>
                <input type="text" placeholder="Your name" /><br />
                <input type="text" placeholder="Your email" /><br />
                <input type="text" placeholder="Subject" /><br />
                <textarea rows="4" cols="50" placeholder="Message" /><br />
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;