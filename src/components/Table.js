import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = () => (
    <table className="table table-striped">
        <TableHead />
        <TableBody /> 
    </table>
);

export default Table;
