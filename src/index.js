import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {renderRoutes } from 'react-router-config';
import routes from './routes';
import configureStore, {history} from './store';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore()
ReactDOM.render(
    <Provider store = {store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
