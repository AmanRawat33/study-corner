import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showDashboard: false,
  },
  reducers: {
    toggleDashboardView: (state, action) => {
      state.showDashboard = !state.showDashboard;
    },
  },
});

export const { toggleDashboardView } = dashboardSlice.actions;
export default dashboardSlice.reducer;
