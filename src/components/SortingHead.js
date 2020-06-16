import React from 'react';
import { connect } from 'react-redux';
import { setSortParam } from '../actions/filters';

const TableHead = ( { dispatch, sortBy, displayText, filters, isFetching, didInvalidate } ) => (
   <th
        className={ sortBy === filters.sortBy ? filters.sortClassName : "sorting"}
        disabled={ isFetching || didInvalidate}
        onClick={() => {dispatch(setSortParam(sortBy))}}
        >
       { displayText }
    </th>
);

const mapStateToProps = (state) => (
    {
        isFetching: state.repositoryData.isFetching,
        didInvalidate:  state.repositoryData.didInvalidate,
        filters: state.filters
    }
);

export default connect(mapStateToProps)(TableHead);
