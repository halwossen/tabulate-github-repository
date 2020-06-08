// Get Visible Repositories

export default (
    { currentPage, repositoriesPerPage, repositories }, 
    { text, sortBy, dateCreated, dateUpdated }
    ) => {
        return repositories.filter((repository) => {
            const textMatch = repository.description.toLowerCase().includes(text.toLowerCase())
            const updatedDateMatch = typeof !(dateUpdated === 'number') || dateUpdated <= repository.updated_at
            const createdDateMatch = typeof !(dateCreated === 'number') || dateCreated <= repository.created_at
            return textMatch && createdDateMatch && updatedDateMatch;
        }).sort((a, b) => {
            if(sortBy === 'date_updated') {
                return a.updated_at < b.updated_at ? 1 : -1
            } else if (sortBy === 'date_created') {
                return a.created_at < b.created_at ? 1 : -1
            }
        }).slice(currentPage * repositoriesPerPage, ((currentPage + 1) * repositoriesPerPage))
};


