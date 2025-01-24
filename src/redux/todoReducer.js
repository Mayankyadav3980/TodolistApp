import js from "@eslint/js";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = { todos:[] , currentTitle:'ct', showEdit:false };

export const getTodos = createAsyncThunk('todo/getTodos', async (args, thunkAPI)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0,5);
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

export const editTodo = createAsyncThunk('todo/editTodo', async (args)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(args)
    });

    const json =  await res.json();
    return json;
})

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        delete: (state, action)=>{

        },
        setCurrentTitle:(state, action)=>{
            state.currentTitle=action.payload;
        },
        setShowEdit:(state)=>{
            state.showEdit = !state.showEdit;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
        });

        builder.addCase(addTodo.fulfilled, (state, action)=>{
            let len = state.todos.length;            
            state.todos.unshift({ ...action.payload, id: len + 1 });
            
        });

        builder.addCase(editTodo.fulfilled, (state, action)=>{
            console.log(action.payload);
            
        })

    }
})

export const { setCurrentTitle, setShowEdit } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;