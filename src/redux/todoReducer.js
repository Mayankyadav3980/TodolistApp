import js from "@eslint/js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  currentTitle: "",
  showEdit: false,
  todoToUpdate: {},
};

export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async (args, thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 6);
  }
);

export const addTodo = createAsyncThunk("todo/addTodo", async (args) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({ ...args }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res.json();
});

export const editTodo = createAsyncThunk("todo/editTodo", async (args) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  const json = await res.json();
  return json;
});

export const delTodo = createAsyncThunk("todo/delTodo", async (args) => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "DELETE",
  });
  return args;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    delete: (state, action) => {},
    setCurrentTitle: (state, action) => {
      state.currentTitle = action.payload;
    },
    setShowEdit: (state) => {
      state.showEdit = !state.showEdit;
    },
    setTodoToUpdate: (state, action) => {
      state.todoToUpdate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      let len = state.todos.length;
      state.todos.unshift({ ...action.payload, id: len + 1 });
    });

    builder.addCase(editTodo.fulfilled, (state, action) => {
      const updatedTodo = state.todoToUpdate;
      const idx = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      state.todos.splice(idx, 1, updatedTodo);
    });

    builder.addCase(delTodo.fulfilled, (state, action) => {
      let idx = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(idx, 1);
    });
  },
});

export const { setCurrentTitle, setShowEdit, setTodoToUpdate } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
