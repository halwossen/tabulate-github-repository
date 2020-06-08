// Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date_updated',
    dateUpdate: undefined,
    dateCreated: undefined,
}

export default (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE_UPDATED':
            return {
                ...state,
                sortBy: 'date_updated'
            }
        case 'SORT_BY_DATE_CREATED':
            return {
                ...state,
                sortBy: 'date_created'
            }
        default:
            return state
    }
}