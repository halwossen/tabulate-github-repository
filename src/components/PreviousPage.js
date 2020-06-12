import React from 'react';
import { previousPage } from '../actions/repositories';

const PreviousPage = ({ dispatch, isFetching, didInvalidate, repositories }) => (
    <button
        className="previous-page"
        disabled={(repositories.currentPage - 1) * repositories.repositoriesPerPage < 0 || isFetching || didInvalidate}
        onClick={() => {dispatch(previousPage())}} 
    >
        Previous
    </button>
);

export default PreviousPage;