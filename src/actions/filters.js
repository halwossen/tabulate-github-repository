// SET_TEXT_FILTER

export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

// SET_SORT_PARAMETER

export const setSortParam = (sortBy) => (
    {
        type: 'SET_SORT_PARAM',
        sortBy
    }
);



