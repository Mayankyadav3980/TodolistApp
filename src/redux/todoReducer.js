import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { todos:[] };

export const getTodos = createAsyncThunk('todo/getTodos', async (args, thunkAPI)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0,14);
})

export const addTodo = createAsyncThunk('todo/addTodo', async (args)=>{
    
    const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
        method:'POST',
        body:JSON.stringify({...args}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    return res.json();
})
const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        edit: (state, action)=>{

        },
        delete: (state, action)=>{

        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
        });
        builder.addCase(addTodo.fulfilled, (state, action)=>{
            let len = state.todos.length;            
            state.todos.unshift({ ...action.payload, id: len + 1 });
            
        })
    }
})

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;