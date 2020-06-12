import React from 'react';
import TableNav from './TableNav';
import { connect } from 'react-redux';

const Spinner = ({ didInvalidate }) => (
    <div className="container">
        <TableNav />
        <div className="spinner">
            { !didInvalidate ? 
                <div id="isFetching" className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : 
                <div id="didInvalidate">It looks like something went woring. Please <strong>refresh</strong> the page.</div>}
        </div>
    </div>
);

const mapStateToProps = (state) => (
    {
        didInvalidate: state.repositoryData.didInvalidate
    }
);

export default connect(mapStateToProps)(Spinner);


