import React from 'react';
import { connect } from 'react-redux';
import PageDisplay from './PageDisplay';
import PreviousPage from './PreviousPage';
import NextPage from './NextPage';
import Filter from './Filter';
import Sort from './Sort';
import RefreshPage from './RefreshPage';

const TableNav = ({dispatch, isFetching, didInvalidate, repositories, filters}) => (
    <div className="row">
        <div className="col-12 col-md-4 table-nav-firs-half">
            <div className="row">
                <div className="col table-nav-element">
                    <PageDisplay isFetching={isFetching} didInvalidate={didInvalidate} repositories={repositories}/>
                </div>
                <div className="col table-nav-element">
                    <PreviousPage dispatch={dispatch} isFetching={isFetching} didInvalidate={didInvalidate} repositories={repositories}/>
                 </div>
                 <div className="col table-nav-element">
                    <NextPage dispatch={dispatch} isFetching={isFetching} didInvalidate={didInvalidate} repositories={repositories}/>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-8 table-nav-firs-half">
            <div className="row">
                <div className="col-6 col-md-6 table-nav-element" id="filter">
                    <Filter dispatch={dispatch} isFetching={isFetching} didInvalidate={didInvalidate} filters={filters}/>
                </div>
                <div className="col col-md table-nav-element">
                    <Sort dispatch={dispatch} isFetching={isFetching} didInvalidate={didInvalidate} filters={filters}/>
                </div>
                <div className="col col-md table-nav-element" id="refresh">
                    <RefreshPage dispatch={dispatch} isFetching={isFetching} didInvalidate={didInvalidate}/>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => (
    {
        isFetching: state.repositoryData.isFetching,
        didInvalidate:  state.repositoryData.didInvalidate,
        repositories: state.repositoryData,
        filters: state.filters
    }
);

export default connect(mapStateToProps)(TableNav);