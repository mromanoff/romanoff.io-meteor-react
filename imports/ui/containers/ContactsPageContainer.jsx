import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Contacts} from '../../api/contacts.js';
import ContactsPage from '../pages/ContactsPage.jsx';

export default createContainer(() => {
    const contactsHandle = Meteor.subscribe('contacts');
    const loading = !contactsHandle.ready();
    const contacts = Contacts.find({}, {sort: {createdAt: -1}});
    const contactsExists = !loading && !!contacts;

    return {
        loading,
        contactsExists,
        contacts: contactsExists ? contacts.fetch() : []
    };
}, ContactsPage);
