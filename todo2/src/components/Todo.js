import React from 'react';

const Todo = ({todo, toggleTask, removeTask}) => {
    console.log(todo)
    return (
        <div style={{display: 'flex'}}>
            <div>
                {todo.text}
            </div>
            <div>
                <button onClick={()=>removeTask(todo.id)}> delete</button>
            </div>

        </div>
    );
};

export default Todo;