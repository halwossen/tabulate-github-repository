import React from 'react';
import { connect } from 'react-redux';
import selectRepositories from '../selectors/repositories';

const TableBody = ( {currentPage, repositoriesPerPage, repositories} ) => {
    return ( <tbody>
                { repositories.map(({ id, name, updated_at, created_at }, index) => (
                    <tr key={id}>
                        <th scope="row">{ (currentPage * repositoriesPerPage) + (index + 1) }</th>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{updated_at}</td>
                        <td>{created_at}</td>
                    </tr> ))
                }
            </tbody>)
};

const mapStateToProps = (state) => (
    
    {
        currentPage: state.repositoryData.currentPage,
        repositoriesPerPage: state.repositoryData.repositoriesPerPage,
        repositories: selectRepositories(state.repositoryData, state.filters)
    }
);

export default connect(mapStateToProps)(TableBody);
