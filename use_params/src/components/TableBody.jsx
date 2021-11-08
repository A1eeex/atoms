import React from 'react';
import {Link} from 'react-router-dom'

const TableBody = ({users}) => {
    console.log(users)
    return (
        <div>
            {users.map((item, i) => (
                <div key={i}>
                    <Link to={`user/${item.id}`}>
                        {item.name}
                    </Link>
                </div>

            ))}
        </div>
    )
}

    export default TableBody;