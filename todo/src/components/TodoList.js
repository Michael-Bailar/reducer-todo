import React, { useReducer, useState } from "react"
import { todoReducer, todoInitialState } from "../reducers/todoReducer"

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, todoInitialState);
    const [newTodoText, setNewTodoText] = useState('')

    const handleChanges = event => {
        setNewTodoText(event.target.value)
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className='add-single-item'>
                <input 
                    className='add-single-item-input'
                    type='text'
                    name='newTodoText'
                    value={newTodoText}
                    onChange={handleChanges}
                />
                <button 
                    onClick={ () => 
                        dispatch({ type: 'ADD_NEW_CHORE', payload: newTodoText }) }
                >
                    Add Todo
                </button>
            </div>
            <div className='todo-card-container'>
                { state.map(item => {
                    return(
                        <div 
                            className={`todo-card ${!item.completed ? 'complete' : 'incomplete'}`} 
                            key={item.id} 
                        >
                            <p 
                                onClick={() => 
                                    dispatch({ type: 'TOGGLE_COMPLETE', payload: !item.completed })
                                }
                            >
                                {item.item} 
                            </p>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default TodoList