import React from 'react';
import { connect } from 'react-redux';
import selectRepositories from '../selectors/_repositories';

const TableBody = ( {currentPage, repositoriesPerPage, repositories} ) => {
    return (
    <tbody>
        { repositories.map((repository, index) => (
            <tr key={repository.id}>
                <th scope="row">{ (currentPage * repositoriesPerPage) + (index + 1) }</th>
                <td>{repository.id}</td>
                <td>{repository.name}</td>
                <td>{repository.updated_at}</td>
                <td>{repository.created_at}</td>
             </tr>
            ))}
    </tbody>
    )
        };

const mapStateToProps = (state) => (
    
    {
        currentPage: state.repositories.currentPage,
        repositoriesPerPage: state.repositories.repositoriesPerPage,
        repositories: selectRepositories(state.repositories, state.filters)
    }
);

export default connect(mapStateToProps)(TableBody);
