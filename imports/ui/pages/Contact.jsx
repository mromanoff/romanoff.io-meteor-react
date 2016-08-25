import React, {Component} from 'react';

import {insert} from '../../api/methods.js';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this)
    }

    addContact(event) {
        event.preventDefault();

        var firstName = this.refs.firstName.value.trim();
        var lastName = this.refs.lastName.value.trim();
        var email = this.refs.email.value.trim();

        insert.call({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
    }

    render() {
        return (
            <main className="contact contact--index">
                <section className="container">
                    <h1 className="title">Contact</h1>
                    <h2 className="title">Michael Romanoff</h2>

                    <section className="module">
                        <p>
                            <img src="/images/me.jpg" alt="Michael Romanoff"/>
                        </p>

                        <p>
                            <strong>email:</strong>
                            <a href="mailto:2michael.romanoff@gmail.com">
                                2michael.romanoff [at] gmail.com
                            </a>
                        </p>

                        <p>
                            <strong>google hangouts:</strong> zelcie
                        </p>
                    </section>
                </section>
                <section className="container full-width">
                    <form className="contact__form" onSubmit={this.addContact}>
                        <h5>Or introduce yourself</h5>
                        <h3>Hello! My name is</h3>
                        <div className="form-group">
                            <label className="display--hidden--visually" for="firstName">First Name</label>
                            <input id="firstName"
                                   name="firstName"
                                   ref="firstName"
                                   className="first-name"
                                   type="text"
                                   maxlength="15"
                                   placeholder="First Name"/>
                            <span className="message--error"></span>
                        </div>

                        <div className="form-group">
                            <label className="display--hidden--visually" for="lastName">Last Name</label>
                            <input id="lastName"
                                   name="lastName"
                                   ref="lastName"
                                   className="last-name"
                                   type="text"
                                   maxlength="15"
                                   placeholder="Last Name"/>
                            <span className="message--error"></span>
                        </div>

                        <h5>Please contact me</h5>

                        <div className="form-group">
                            <label className="display--hidden--visually" for="email">Email</label>
                            <input id="email"
                                   ref="email"
                                   name="email"
                                   type="email"
                                   maxlength="50"
                                   placeholder="Email Address"/>
                            <span className="message--error"></span>
                        </div>

                        <nav className="button-container button-container--centered">
                            <button type="submit" className="btn btn--primary">Contact</button>
                        </nav>
                    </form>
                </section>
            </main>
        )
    }
}