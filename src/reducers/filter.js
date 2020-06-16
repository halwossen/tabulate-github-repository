// Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date_updated',
    sortIndex: 1,
    sortClassName: 'sorting_asc',
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
        case 'SET_SORT_PARAM':
            return {
                ...state,
                sortIndex: -1 * state.sortIndex,
                sortBy: action.sortBy,
                sortClassName: state.sortIndex === 1 ? 'sorting_asc' : 'sorting_desc'
            }
        default:
            return state
    }
}