import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startFetchingRepositories } from './actions/repositories';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

startFetchingRepositories(store.dispatch);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))