import React, { Conponent, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../../api/contacts.js';
import App from '../layouts/App.jsx';

export default createContainer(() => {
    const publicHandle = Meteor.subscribe('contacts');

    return {
        user: Meteor.user(),
        loading: !publicHandle.ready(),
        contacts: Contacts.find({}).fetch()
    };
}, App);

App.propTypes = {
    contacts: PropTypes.array.isRequired
};
