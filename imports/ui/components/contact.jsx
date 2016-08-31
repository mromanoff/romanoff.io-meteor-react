import React, {Component, PropTypes} from 'react';
import {remove} from '../../api/methods.js';

export default class Contact extends Component {
    deleteContact() {
        remove.call({contactId: this.props.contact._id});
    }

    render() {
        return (
            <li className="contacts__item list-unstyled margin-vertical--lg">
                <div>
                    <div><strong>First Name:</strong> {this.props.contact.firstName}</div>
                    <div><strong>First Name:</strong> {this.props.contact.lastName}</div>
                    <div><strong>Email:</strong> {this.props.contact.email}</div>
                    <div><strong>Comment:</strong> {this.props.contact.comment}</div>
                </div>
                <button type="button" className="btn btn--tertiary btn--sm margin-right--md float--right"
                        onClick={this.deleteContact.bind(this)}>
                    &times;
                </button>
            </li>
        )
    }
}

Contact.propTypes = {
    contact: React.PropTypes.object
};
