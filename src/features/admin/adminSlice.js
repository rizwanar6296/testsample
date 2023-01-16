const { createSlice } = require("@reduxjs/toolkit");



const initialState={
    admin:false
}
const adminSlice= createSlice({
    name:'admin',
    initialState,
    reducers:{
        login:(state,{payload})=>{
            console.log('admin slice login',payload)
            if(payload.email=='admin'&& payload.password=='admin')  state.admin=true
        },
        logout:(state)=>{
            state.admin=false
        }
    }

})

export default adminSlice.reducer
export const {login,logout}=adminSlice.actions
export const getAdmin=state=>state.admin.admin