import adminReducer from "../features/admin/adminSlice";
import studentReducer from "../features/student/studentSlice";
import teacherReducer from "../features/teacher/teacherSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer:{
        admin:adminReducer,
        student:studentReducer,
        teacher:teacherReducer
    }
})