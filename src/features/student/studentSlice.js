const { createSlice } = require("@reduxjs/toolkit");


const initialState={
    students:[]
}

const studentSlice= createSlice({
    name:'student',
    initialState,
    reducers:{
        addStudent:(state,{payload})=>{
            state.students.push(payload)
        },
        deleteStudent:(state,{payload:id})=>{
            state.students=state.students.filter(student=>!student.id==id)
        },
        eidtStudent:(state,{payload})=>{
            state.students=state.students.map(student=>{
                if(student.id==payload.id) student.name=payload.name
                return student
            })
        }
    }
})
export default studentSlice.reducer
export const {addStudent,eidtStudent,deleteStudent} = studentSlice.actions
export const getStudents=(state)=>state.student.students