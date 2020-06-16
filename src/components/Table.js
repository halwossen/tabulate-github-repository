import React from 'react';
import TableHead from './TableHeader';
import TableBody from './TableBody';

const Table = () => (
    <div className="row">
        <table className="table table-striped table-bordered repositoryTable">
            <TableHead id='id' name='name' dateCreated='date_created' dateUpdated='date_updated'/>
            <TableBody /> 
        </table>
    </div>
);

export default Table;
