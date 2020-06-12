import React from 'react';
import { setTextFilter } from '../actions/filters';

const Filter = ({dispatch, isFetching, didInvalidate, filters }) => (
    
    <input 
        className="form-control"
        disabled={ isFetching || didInvalidate}
        value={filters.text}
        type="search"
        placeholder="Filter by description"
        onChange={(e) => {
            dispatch(setTextFilter(e.target.value))
        }}
    />
);

export default Filter;
