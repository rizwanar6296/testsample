const { createSlice } = require("@reduxjs/toolkit");


const initialState={
    teachers:[],
    students:[]
}
const studentSlice= createSlice({
    name:'student',
    initialState,
    reducers:{

    }

})