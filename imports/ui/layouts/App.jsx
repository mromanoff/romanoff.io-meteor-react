import React from 'react';

import {Link} from 'react-router';
import AccountsUIWrapper from '../containers/AccountsUIWrapper.jsx';

export default class App extends React.Component {

    render() {

        const {children} = this.props;

        return (
            <div className="application">
                <header role="banner" className="header">
                    <div className="header__menu is-mobile">
                        <a href="#" data-action="open-menu" className="btn-hamburger icon-menu"></a>
                        <a href="#" data-action="close-menu" className="btn-hamburger icon-close is-hidden"></a>
                    </div>
                    <h1 className="header__logo">
                        <a href="/">
                            <img src="/images/header-logo.png" alt="off.io"/>
                        </a>
                    </h1>
                    <nav className="header__navigation">
                        <ul className="header__links" data-target="header-links">
                            <li className="header__link">
                                <Link to="/" activeClassName="is-active">Overview</Link>
                            </li>
                            <li className="header__link">
                                <Link to="/work" activeClassName="is-active">Work</Link>
                            </li>
                            <li className="header__link ">
                                <Link to="/photography" activeClassName="is-active">Photography</Link>
                            </li>
                            <li className="header__link ">
                                <Link to="/contact" activeClassName="is-active">Contact</Link>
                            </li>
                            <li className="header__link ">
                                <Link to="/admin/contacts" activeClassName="is-active">Contact Entries</Link>
                            </li>
                        </ul>
                    </nav>
                    <AccountsUIWrapper />
                </header>
                {children}
            </div>
        );
    }
}

App.propTypes = {};

App.contextTypes = {
    router: React.PropTypes.object,
};