import React, {useState} from 'react';

const TotoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='text'
                    placeholder='Add todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSubmit}> Add</button>
            </form>

        </div>
    );
};

export default TotoForm;