import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

import {Contacts} from './contacts.js';

const CONTACT_ID_ONLY = new SimpleSchema({
    contactId: {type: String},
}).validator();


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

        console.log('contacts', contact);

        Contacts.insert(contact);
    }
});

export const remove = new ValidatedMethod({
    name: 'contacts.remove',
    validate: CONTACT_ID_ONLY,
    run({contactId}) {
        //const contact = Contacts.findOne(contactId);
        // if (!contact.editableBy(this.userId)) {
        //     throw new Meteor.Error('lists.remove.accessDenied',
        //         'You don\'t have permission to remove this list.');
        // }

        Contacts.remove(contactId);
    }
});