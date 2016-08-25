import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import OverviewPage from '../../ui/pages/Overview.jsx';
import WorkPage from '../../ui/pages/Work.jsx';
import PhotographyPage from '../../ui/pages/Photography.jsx';
import ContactPage from '../../ui/pages/Contact.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={OverviewPage} />
            <Route path="work" component={WorkPage}/>
            <Route path="photography" component={PhotographyPage}/>
            <Route path="contact" component={ContactPage}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);