import React, {useEffect, useState} from 'react';
import axios from 'axios'
import TableBody from "./TableBody";

const TablePage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const allUsers = response.data
            setUsers(allUsers)
    }

    useEffect(() => {
        fetchUsers()

    }, [setUsers])
    console.log(users)
    return (
        <div>
            <TableBody users={users} />

        </div>
    );
};

export default TablePage;