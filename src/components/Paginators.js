import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage, startFetchingRepositories } from '../actions/repositories';

const Header = ({dispatch, repositories, isFetching, didInvalidate }) => (
    <div>
        {isFetching || didInvalidate ? undefined :
            <div className="page-display">
                {1 + (repositories.currentPage  * repositories.repositoriesPerPage)} - {(repositories.currentPage + 1) * repositories.repositoriesPerPage} of 100 
            </div> }
        <button 
            className="paginators"
            disabled={(repositories.currentPage - 1) * repositories.repositoriesPerPage < 0 || isFetching || didInvalidate}
            onClick={() => {dispatch(previousPage())}} 
        >
            Previous
    </button>
        <button 
            className="paginators"
            disabled={!((repositories.currentPage + 1) * repositories.repositoriesPerPage < repositories.repositories.length) || isFetching || didInvalidate}
            onClick={() => {dispatch(nextPage())}}
        >
            Next
        </button>
        <button 
            disabled={ !didInvalidate && isFetching }
            className="refresh" 
            onClick={() => {startFetchingRepositories(dispatch)}}
        >
            Refresh
        </button>
    </div>
);

const mapStateToProps = (state) => (
    {
        repositories: state.repositoryData,
        isFetching: state.repositoryData.isFetching,
        didInvalidate:  state.repositoryData.didInvalidate
    }
);

export default connect(mapStateToProps)(Header);

