import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Table from '../components/Table';
import Paginators from '../components/Paginators';
import Filter from '../components/Filter';
import Spinner from '../components/Spinner';

const AppRouter = ({ isFetching, didInvalidate }) => (
    (isFetching || didInvalidate) ? <Spinner didInvalidate={didInvalidate}/> : (
    <Router>
        <div className="container">
        <div className=" header d-flex justify-content-between">
            <Filter />
            <Paginators />
        </div>
        <Switch>
            <Route path="/" component={Table}/>
        </Switch>
        </div>
    </Router>
    )
);

const mapStateToProps = (state) => (
    {
        isFetching: state.repositoryData.isFetching,
        didInvalidate: state.repositoryData.didInvalidate
    }
);

export default connect(mapStateToProps)(AppRouter);


