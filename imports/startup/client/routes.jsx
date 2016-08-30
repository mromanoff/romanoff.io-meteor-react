import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import OverviewPage from '../../ui/pages/OverviewPage.jsx';
import WorkPage from '../../ui/pages/WorkPage.jsx';
import PhotographyPage from '../../ui/pages/PhotographyPage.jsx';
import ContactPage from '../../ui/pages/ContactPage.jsx';
import ContactsPageContainer from '../../ui/containers/ContactsPageContainer.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';


//TODO: find better place for this import
import '../accounts-config.js';


export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={OverviewPage} />
            <Route path="work" component={WorkPage}/>
            <Route path="photography" component={PhotographyPage}/>
            <Route path="contact" component={ContactPage}/>
            <Route path="admin/contacts" component={ContactsPageContainer}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);