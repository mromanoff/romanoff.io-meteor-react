/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Contacts } from '../contacts.js';

Meteor.publish('contacts', function contacts() {
    return Contacts.find({});
});
