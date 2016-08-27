import React, { Component, PropTypes} from 'react';

export default class Contact extends Component {
    render() {
        return (
            <li className="contacts__item">
                First Name:  {this.props.contact.firstName}
                First Name:  {this.props.contact.lastName}
                Email:  {this.props.contact.email}
                Comment:  {this.props.contact.comment}
            </li>
        )
    }
}

Contact.propTypes = {
    contact: React.PropTypes.object
};
