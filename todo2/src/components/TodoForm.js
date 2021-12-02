import React, {useState} from 'react';

const TodoForm = ({addTask}) => {
    const [userInp, setUserInp] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInp)
        setUserInp('')
    }
    const handleChange = (e) => {
        setUserInp(e.currentTarget.value)
    }
    const handleKeyPress = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={userInp}
                    onChange={handleChange}
                    type="text"
                    onKeyDown={handleKeyPress}
                    placeholder='enter...'
                />

                <button>add</button>
            </form>
        </div>
    );
};

export default TodoForm;