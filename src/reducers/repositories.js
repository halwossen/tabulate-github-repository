// Load Repositories Reducer

const repositoriesReducerDefaultState = {
    currentPage: 0,
    repositoriesPerPage: 5,
    repositories: []
};

export default (state = repositoriesReducerDefaultState, action) => {
    switch(action.type) {
        case 'LOAD_REPOSITORIES':
            return {
                ...state,
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
