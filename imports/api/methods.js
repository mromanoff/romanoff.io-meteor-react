import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Contacts } from './contacts.js';


export const insert = new ValidatedMethod({
    name: 'contacts.insert',

    validate: new SimpleSchema({
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String }
    }).validator(),

    run({ firstName, lastName, email }) {

        const contact = {
            firstName,
            lastName,
            email,
            createdAt: new Date(),
        };

        console.log('contacts', contact);

        Contacts.insert(contact);
    }
});