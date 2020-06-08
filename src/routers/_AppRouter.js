import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Table from '../components/Table';
import Header from '../components/Header';
import Filter from '../components/Filter';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <Router>
        <div className="container">
            <Header />
            <Filter />
            <Switch>
                <Route path="/" component={Table} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;