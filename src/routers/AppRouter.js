import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Spinner from '../components/Spinner';
import Table from '../components/Table';
import TableNav from '../components/TableNav';

const AppRouter = ({ isFetching, didInvalidate }) => (
    (isFetching || didInvalidate) ? <Spinner didInvalidate={didInvalidate}/> : (
    <Router>
        <div className="container">
            <TableNav />
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
