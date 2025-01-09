import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      description: "description of task 1",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default todoSlice.reducer;
