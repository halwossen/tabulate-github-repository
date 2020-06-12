// Load Repositories Reducer

const repositoriesReducerDefaultState = {
    currentPage: 0,
    repositoriesPerPage: 20,
    repositories: [{id: '', description: '', updated_at: undefined, created_at: undefined}],
    didInvalidate: false,
    isFetching: false,
};

export default (state = repositoriesReducerDefaultState, action) => {
    switch(action.type) {
        case 'MAKE_REQUEST':
            return {
                ...state,
                isFetching: true,
            }
        case 'INVALIDATE_REQUEST':
            return {
                ...state,
                didInvalidate: true,
                isFetching: false
            }
        case 'RECEIVED_REQUEST':
            return {
                ...state,
                isFetching: false,
                repositories: action.repositories
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
       
        case 'PREVIOUS_PAGE':
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        default:
            return state;
    }
}
