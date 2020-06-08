// Load Repositories

export const loadRepositories = (repositories) => (

    {
        type: 'LOAD_REPOSITORIES',
        repositories: repositories.items,
    }
);


// Next Page Repository

export const nextPage = () => (
    {
        type: 'NEXT_PAGE'
    }
);

// // Previous Page Repository

export const previousPage = () => (
    {
        type: 'PREVIOUS_PAGE'
    }
);

