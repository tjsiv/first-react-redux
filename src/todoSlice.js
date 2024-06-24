import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)  => {
            state.items.push({ text: action.payload });
        },        
        clearTodo: (state) => {
            state.items = [];
        }

    }
})

export const { addTodo, clearTodo } = todoSlice.actions

export default todoSlice.reducer