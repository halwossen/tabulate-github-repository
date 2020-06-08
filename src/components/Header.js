import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage } from '../actions/repositories';

const Header = ({dispatch, repositories }) => (
    <div>
        <h1>Github Repositories</h1>
        <button 
            className="btn btn-secondary"
            disabled={(repositories.currentPage - 1) * repositories.repositoriesPerPage < 0}
            onClick={() => {dispatch(previousPage())}} 
        >
            Previous
    </button>
        <button 
            className="btn btn-secondary"
            disabled={!((repositories.currentPage + 1) * repositories.repositoriesPerPage < repositories.repositories.length)}
            onClick={() => {dispatch(nextPage())}}
        >
            Next
        </button>
    </div>
);

const mapStateToProps = (state) => (
    {
        repositories: state.repositories
    }
);

export default connect(mapStateToProps)(Header);

