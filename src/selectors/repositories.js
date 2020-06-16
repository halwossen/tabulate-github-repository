// Get Visible Repositories

export default ({ currentPage, repositoriesPerPage, repositories }, { text, sortBy, sortIndex}) => {
        return repositories.filter(({ description }) => {
            const textMatch = description? description.toLowerCase().includes(text.toLowerCase()) : null;
            return !!textMatch
        }).sort((a, b) => {
            switch(sortBy) {
                case 'id':
                    return sortIndex * (a.id < b.id ? 1 : -1)
                case 'name':
                    return sortIndex * (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                case 'date_created':
                    return sortIndex * (a.date_created < b.date_created ? 1 : -1)
                case 'date_updated':
                    return sortIndex * (a.date_updated < b.date_updated  && sortIndex ? 1 : -1)
            }
        }).slice(currentPage * repositoriesPerPage, ((currentPage + 1) * repositoriesPerPage))
};
