// Did Invalidate

export const didInvalidate = () => (
    {
        type: 'INVALIDATE_REQUEST'
    }
);

// Make Reqeust

export const makeRequest = () => (
    {
        type: 'MAKE_REQUEST'
    }
);

// Receive Request

export const receivedRequest = (repositories) => (
    {
        type: 'RECEIVED_REQUEST',
        repositories: repositories,
    }
);

export const startFetchingRepositories = (dispatch) => {
    dispatch(makeRequest())

    fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
            }
            return response.json()
    })
    .then((repositories => {
        dispatch(receivedRequest(repositories.items))
    }))
    .catch(() => {
        dispatch(didInvalidate())
    })
}


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
