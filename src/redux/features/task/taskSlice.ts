import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
