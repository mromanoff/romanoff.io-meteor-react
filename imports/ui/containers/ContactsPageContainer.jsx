import React, {Conponent, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Contacts} from '../../api/contacts.js';
import ContactsPage from '../pages/ContactsPage.jsx';

export default createContainer(() => {
    const contactsHandle = Meteor.subscribe('contacts');
    const loading = !contactsHandle.ready();
    const contacts = Contacts.find();

    return {
        loading,
        contacts: Contacts.find({}).fetch()
    };
}, ContactsPage);

ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired
};
