import React from 'react';

const TableBody = ({persons}) => {

    if(!persons  || persons.length ===0 ) return <p>Empty</p>
    return (
        <div>
            <div>{persons.name}</div>

            {persons.map((user)=> (
                <>
                <div>name</div>
                <div>{user.name}</div>
                    <br/>
                </>
            ))}
        </div>
    );
};

export default TableBody;