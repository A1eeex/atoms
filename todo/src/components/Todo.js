import React, {useState} from 'react';
import TotoForm from "./TotoForm";

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <TotoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return (
        <div>
            {todos.map((item, i) => (
                <div key={i} style={{display: 'flex', width: '209px', justifyContent: 'space-between'}}>
                    <div key={item.id} onClick={() => completeTodo(item.id)}>{item.text}</div>
                    <div>
                        <button onClick={() => removeTodo(item.id)}>delete</button>
                        <button onClick={() => setEdit({id: item.id, value: item.text})}>edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todo;