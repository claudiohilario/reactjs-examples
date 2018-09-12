import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

import Router from './Router';
import configureStore from './store/configureStore';


ReactDOM.render(
    <Provider store={configureStore()}>
        <Router />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
