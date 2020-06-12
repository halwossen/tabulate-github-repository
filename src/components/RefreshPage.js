import React from 'react';
import {startFetchingRepositories } from '../actions/repositories';

const RefreshPage = ({dispatch, isFetching, didInvalidate }) => (
    <button 
        className="refresh-page"
        disabled={ !didInvalidate && isFetching }
        onClick={() => {startFetchingRepositories(dispatch)}}
    >
        Refresh
    </button>
);

export default RefreshPage;


