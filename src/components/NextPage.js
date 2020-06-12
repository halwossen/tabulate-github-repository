import React from 'react';
import { nextPage } from '../actions/repositories';

const NextPage = ({ dispatch, isFetching, didInvalidate, repositories }) => (
    <button 
        className="next-page"
        disabled={!((repositories.currentPage + 1) * repositories.repositoriesPerPage < repositories.repositories.length) || isFetching || didInvalidate}
        onClick={() => {dispatch(nextPage())}}
    >
        Next
    </button>
);

export default NextPage;