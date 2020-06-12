import React from 'react';
import { sortByDateUpdated, sortByDateCreated } from '../actions/filters';

const Sort = ({dispatch, isFetching, didInvalidate, filters }) => (
    <select
        className="sort"
        disabled={ isFetching || didInvalidate}
        value={filters.sortBy}
        onChange={(e) => {
            if (e.target.value === "date_updated") {
                dispatch(sortByDateUpdated(e.target.value))
            } else if (e.target.value === 'date_created') {
                dispatch(sortByDateCreated(e.target.value))
            }
        }}
        >
        <option value="date_updated">Date Updated</option>
        <option value="date_created">Date Created</option>
    </select>
);

export default Sort;