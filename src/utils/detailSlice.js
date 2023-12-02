import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "details",
  initialState: {
    showDetails: false,
    courseID: null,
  },
  reducers: {
    toggleDetailsView: (state, action) => {
      state.showDetails = !state.showDetails;
    },
    addCourseID: (state, action) => {
      state.courseID = action.payload;
    }
  },
});

export const { toggleDetailsView, addCourseID } = detailSlice.actions;
export default detailSlice.reducer;
