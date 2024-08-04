//Q4 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '@mui/material';

function DataFetching() {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data)) 
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h3>Fetching Data From API React AXIOS</h3>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((user, index) => (
                        <tr >
                            <td>{user.id}</td>
                            <td>{user.name}</td> 
                            <td>{user.email}</td>  
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default DataFetching;
