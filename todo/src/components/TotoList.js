import React, {useState} from 'react';
import TotoForm from "./TotoForm";
import Todo from "./Todo";

const TotoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if (!text.text || /^\s*$./.test(text.text)) {
            return
        }
        const newTodos = [text, ...todos]
        setTodos(newTodos)
    }
    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => {
            return todo.id !== id
        })
        {
            setTodos(removeArr)
        }
    }

    const updateTodo = (todoId,newText) => {
        if (!newText.text || /^\s*$./.test(newText.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newText : item) ))
    }

    const completeTodo = (id) => {
        let updateTodo = todos.map((item) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete
            }
            return item
        })
        setTodos(updateTodo)
    }

    return (
        <div>
            <TotoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>

        </div>
    );
};

export default TotoList;