import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  todo: {
    task: "",
    isComplited: false,
    hidden: false,
  },
  category: "all",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleAddTodo: (state, { payload }) => {
      let arr = state.todoList;
      state.todo.task = payload;
      if (state.category === "completed") {
        state.todo.hidden = true;
      } else if (state.category === "active") {
        state.todo.hidden = false;
      }
      arr = [...arr, state.todo];
      state.todoList = arr;
    },
    handleCompleteTask: (state, { payload }) => {
      let arr = state.todoList.map((item) => {
        return item.task === payload
          ? { ...item, isComplited: !item.isComplited }
          : item;
      });
      state.todoList = arr;

      if (state.category === "active") {
        let newArr = state.todoList.map((item) => {
          return item.task === payload ? { ...item, hidden: true } : item;
        });
        state.todoList = newArr;
      }
      if (state.category === "completed") {
        let newArr = state.todoList.map((item) => {
          return item.task === payload ? { ...item, hidden: true } : item;
        });
        state.todoList = newArr;
      }
    },
    handleDeleteTask: (state, { payload }) => {
      let arr = state.todoList.filter((item) => item.task !== payload);
      state.todoList = arr;
    },

    handleSelectAllTasks: (state) => {
      state.todoList.forEach((item) => (item.hidden = false));
      state.category = "all";
    },
    handleSelectActiveTasks: (state) => {
      let arr = state.todoList.map((item) => {
        return item.isComplited === false
          ? { ...item, hidden: false }
          : { ...item, hidden: true };
      });
      state.todoList = arr;
      state.category = "active";
    },
    handleSelectComplitedTasks: (state) => {
      let arr = state.todoList.map((item) => {
        return item.isComplited === true
          ? { ...item, hidden: false }
          : { ...item, hidden: true };
      });
      state.todoList = arr;
      state.category = "completed";
    },
  },
});

export default todosSlice.reducer;

export const {
  handleAddTodo,
  handleCompleteTask,
  handleDeleteTask,
  handleSelectAllTasks,
  handleSelectActiveTasks,
  handleSelectComplitedTasks,
} = todosSlice.actions;
