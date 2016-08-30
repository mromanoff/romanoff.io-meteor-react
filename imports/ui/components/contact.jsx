import React, {Component, PropTypes} from 'react';
import {remove} from '../../api/methods.js';

export default class Contact extends Component {
    deleteContact() {
        remove.call({contactId: this.props.contact._id});
    }

    render() {
        return (
            <li className="contacts__item">
                <button className="btn--delete" onClick={this.deleteContact.bind(this)}>
                    &times;
                </button>
                First Name: {this.props.contact.firstName}
                First Name: {this.props.contact.lastName}
                Email: {this.props.contact.email}
                Comment: {this.props.contact.comment}
            </li>
        )
    }
}

Contact.propTypes = {
    contact: React.PropTypes.object
};
