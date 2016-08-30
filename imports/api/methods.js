import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Contacts} from './contacts.js';

export const insert = new ValidatedMethod({
    name: 'contacts.insert',

    validate: new SimpleSchema({
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String}
    }).validator(),

    run({firstName, lastName, email}) {

        const contact = {
            firstName,
            lastName,
            email,
            createdAt: new Date(),
        };

        Contacts.insert(contact);
    }
});

export const remove = new ValidatedMethod({
    name: 'contacts.remove',

    validate: new SimpleSchema({
        contactId: {type: String},
    }).validator(),

    run({contactId}) {
        Contacts.remove(contactId);
    }
});