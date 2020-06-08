// SET_TEXT_FILTER

export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

// SORT_BY_NAME

export const sortByName = () => (
    {
        type: 'SORT_BY_NAME'
    }
);

// SORT_BY_DATE_UPDATED

export const sortByDateUpdated = () => (
    {
        type: 'SORT_BY_DATE_UPDATED'
    }
);

// SORT_BY_DATE_CREATED

export const sortByDateCreated = () => (
    {
        type: 'SORT_BY_DATE_CREATED'
    }
);



