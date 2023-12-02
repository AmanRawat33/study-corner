import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./courseSlice";
import dashboardSlice from "./dashboardSlice";
import detailSlice from "./detailSlice";
const appStore = configureStore({
    reducer: {
        courses: courseSlice,
        dashboard: dashboardSlice,
        details: detailSlice
    }
});

export default appStore;