import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { todos:[] };

export const getTodos = createAsyncThunk('todo/getTodos', async (args, thunkAPI)=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0,14);
})

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add: (state, action)=>{

        },
        edit: (state, action)=>{

        },
        delete: (state, action)=>{

        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
        })
    }
})

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;