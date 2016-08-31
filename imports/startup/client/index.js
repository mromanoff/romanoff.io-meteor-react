import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './routes.jsx';
import '../accounts-config.js';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});