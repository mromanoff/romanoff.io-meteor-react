import React, { Component, PropTypes} from 'react';
import Contact from '../components/contact.jsx';

export default class ContactsPage extends Component {
    render() {

        if(this.props.contacts.length < 1) {
            return <div>Loading...</div>
        }

        return (
            <main className="contacts contacts--all">
                <section className="container">
                    <h1 className="title">Contacts</h1>

                    <section className="module">
                        <ul className="contacts__list">
                            {this.props.contacts.map((contact) => (
                            <Contact key={contact._id} contact={contact} />
                        ))}
                        </ul>
                    </section>
                </section>
            </main>
        )
    }
}


ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired,
};