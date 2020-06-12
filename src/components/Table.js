import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = () => (
    <div className="row">
        <table className="table table-striped">
            <TableHead />
            <TableBody /> 
        </table>
    </div>
);

export default Table;
