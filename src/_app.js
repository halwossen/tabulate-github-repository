import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import _AppRouter from './routers/_AppRouter';
import configureStore from './store/configureStore';
import fetchRepositories from './api/githubRepositoriesApi';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
  
fetchRepositories(store.dispatch)

const jsx = (
    <Provider store={store}>
        <_AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))