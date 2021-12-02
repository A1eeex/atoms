import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([])

    const addTask = (newText) => {
        if (newText) {
            const newItem = {
                id: Math.floor(Math.random() * 1000),
                text: newText,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (todoId) => {
        const newT = [...todos].filter((item) => {
            return item.id !== todoId
        })

        setTodos(newT)
    }
    const handleToggle = () => {

    }

    return (
        <div>
            <header>
                <h1>Todo: {todos.length}</h1>
            </header>
            <TodoForm addTask={addTask}/>
            {todos.map((item) => (
                <Todo key={item.id} todo={item} toggleTask={handleToggle} removeTask={removeTask}/>
            ))}

        </div>
    );
}

export default App;
