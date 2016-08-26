import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session'; // XXX: SESSION
//import { Lists } from '../../api/lists/lists.js';
//import UserMenu from '../components/UserMenu.jsx';
//import ListList from '../components/ListList.jsx';
//import ConnectionNotification from '../components/ConnectionNotification.jsx';
//import Loading from '../components/Loading.jsx';

import { Link } from 'react-router'

export default class App extends React.Component {

    render() {

        const {
            children
        } = this.props;

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
                        </ul>
                    </nav>
                </header>
                {children}
            </div>
        );
    }
}

App.propTypes = {
    //  user: React.PropTypes.object,      // current meteor user
    //  connected: React.PropTypes.bool,   // server connection status
    //  loading: React.PropTypes.bool,     // subscription status
    //  menuOpen: React.PropTypes.bool,    // is side menu open?
    //  lists: React.PropTypes.array,      // all lists visible to the current user
    //  children: React.PropTypes.element, // matched child route component
    //  location: React.PropTypes.object,  // current router location
    // params: React.PropTypes.object,    // parameters of the current route
};

App.contextTypes = {
    router: React.PropTypes.object,
};