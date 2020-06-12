import React from 'react';

const PageDisplay = ({ isFetching, didInvalidate,repositories }) => (
   <div className="page-display">
        {isFetching || didInvalidate ? undefined :
        <span>
            {1 + (repositories.currentPage  * repositories.repositoriesPerPage)} - {(repositories.currentPage + 1) * repositories.repositoriesPerPage} 
        </span> }
   </div>
);

export default PageDisplay;