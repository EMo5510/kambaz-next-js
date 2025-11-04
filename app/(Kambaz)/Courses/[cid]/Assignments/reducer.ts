import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
import { Assignment } from "../../../Database/types";

const initialState = {
  assignments: assignments,
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as Assignment[];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: Assignment) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignment._id ? assignment : a
      ) as Assignment[];
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: Assignment) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as Assignment[];
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;