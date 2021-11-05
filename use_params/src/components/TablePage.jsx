import React, {useEffect, useState} from 'react';
import axios from 'axios'
import TableBody from "./TableBody";

const TablePage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const userApi = 'https://jsonplaceholder.typicode.com/users'
        axios.get(userApi)
            .then((resp) => {
                const allUsers = resp.data
                setUsers(allUsers)
            })
    }, [setUsers])

    return (
        <div>
            <TableBody persons={users}/>
        </div>
    );
};

export default TablePage;