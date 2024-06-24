import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearTodo } from '../todoSlice'

const ToDo = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)
  const inputRef = useRef()

  const handleAddTodo = (e) => {
    e.preventDefault()
    const todoText = inputRef.current.value.trim()
    if (todoText) {
      dispatch(addTodo(todoText))
      inputRef.current.value = ""
    }
  }

  const handleClearTodos = () => {
    dispatch(clearTodo())
  }

  return (
    <div>
      <input type="text" ref={inputRef} id="newItem" />
      <button onClick={handleAddTodo} id="addGrocery">Add</button>
      <button onClick={handleClearTodos} id="clear">Clear</button>
      <ul id="list">
        {items.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
