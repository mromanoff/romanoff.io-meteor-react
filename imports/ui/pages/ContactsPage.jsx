import React, {Component, PropTypes} from 'react';
import Contact from '../components/contact.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

export default class ContactsPage extends Component {
    render() {
        console.info(this.props);

        const {contactsExists, loading, contacts} = this.props;

        if (!contactsExists) {
            return <NotFoundPage />;
        }


        return (
            <main className="contacts contacts--all">
                <section className="container">
                    <h1 className="title">Contacts</h1>
                    <h2 className="title">Total: {contacts.length}</h2>
                    { /* fix this logic */}
                    <section className="module">
                        {loading ? '<h1>Loading tasks...<h1/>' :

                            <ul className="contacts__list">
                                {contacts.map((contact) => (
                                    <Contact key={contact._id} contact={contact}/>
                                ))}
                            </ul>

                        }
                    </section>
                </section>
            </main>
        )
    }
}


ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired,
    loading: React.PropTypes.bool,
    contactsExists: React.PropTypes.bool
};