/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import {Contacts} from './contacts.js';
import {remove} from './methods.js';

if (Meteor.isServer) {
    describe('Contacts', () => {
        describe('methods', () => {
            let contactId;
            
            beforeEach(() => {
                Contacts.remove({});
                contactId = Contacts.insert({
                    firstName: 'First Name Test',
                    lastName: 'LastName Test',
                    createAt: new Date(),
                });
            });

            it('can delete owned contact', () => {
                remove.call({contactId: contactId});
                assert.equal(Contacts.find().count(), 0);
            });
        });
    });
}
