import React from 'react';
import TableHead from './SortingHead';

const TableHeader = () => (
    <thead>
        <tr>
        <th scope="col">#</th>

            <TableHead sortBy='id' displayText= 'Id'/>
            <TableHead sortBy='name' displayText='Name'/>
            <TableHead sortBy='date_created' displayText='Date Created'/>
            <TableHead sortBy='date_updated' displayText='Date Updated'/>
            </tr>
    </thead>
);


export default TableHeader;
