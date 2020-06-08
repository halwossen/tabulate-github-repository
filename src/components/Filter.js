import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDateUpdated, sortByDateCreated } from '../actions/filters';


const Filter = ({ dispatch, filters }) => (
    <div>
        <input 
            value={filters.text}
            type="text"
            placeholder="Filter by description"
            onChange={(e) => {
                dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
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
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(Filter);

// <select>
// <option>Name</option>
// <option>Created Date</option>
// <option>Update Date</option>
// </select>