import React from 'react';
import Filter from './Filter';
import Paginators from './Paginators'

const Spinner = (props) => (
    <div className="container">
        <div className=" header d-flex justify-content-between">
            <Filter />
            <Paginators />
        </div>
        <div className="d-flex justify-content-center">
            <div className="spinner">
                { !props.didInvalidate ? 
                    <div id="isFetching" className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : 
                    <div id="didInvalidate">It looks like something went woring. Please <strong>refresh</strong> the page.</div>}
            </div>
        </div>
    </div>
);

export default Spinner;


