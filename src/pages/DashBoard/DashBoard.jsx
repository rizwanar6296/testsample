import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import StudentSearch from '../../components/StudentSearch'
import Search from '../../components/StudentSearch'
import TeacherSearch from '../../components/TeacherSearch'
import { logout } from '../../features/admin/adminSlice'
import { addStudent, deleteStudent, getStudents } from '../../features/student/studentSlice'
import { addTeacher, deleteTeacher, getTeachers } from '../../features/teacher/teacherSlice'

export default function DashBoard() {
    const dispatch = useDispatch()
    const [editStudent,setEditStudent]=useState({})
    const [editTeacher,setEditTeacher]=useState({})
    const [student,setStudent]=useState('')
    const [teacher,setTeacher]=useState('')
    const students= useSelector(getStudents)
    const teachers=useSelector(getTeachers)
    const handleStudentSubmit=()=>{
        const studentObj={
            id:Date.now(),
            name:student
        }
        dispatch(addStudent(studentObj))
    }

    const handleTeacherSubmit=()=>{
        const teacherObj={
            id:Date.now(),
            name:teacher
        }
        dispatch(addTeacher(teacherObj))
    }
    const handleStudentDelete=(id)=>{
        dispatch(deleteStudent(id))
    }
    const handleTeacherDelete=(id)=>{

        dispatch(deleteTeacher(id))
    }
    
    const handleStudentEdit=()=>{
        dispatch(editStudent(editStudent))
        setEditStudent({})
    }
    const handleTeacherEdit=()=>{
        dispatch(editTeacher(editTeacher))
        setEditTeacher({})
    }

  return (
    <>
    <button onClick={()=>dispatch(logout())} className='bg-slate-600'>logout</button>
    <div>
    <label htmlFor="">student</label>
    <input onChange={(e)=>setStudent(e.target.value)} type="text" placeholder='name' />
    <button onClick={handleStudentSubmit}>add student</button>
    </div>
    <div>



    <label htmlFor="">teacher</label>
    <input onChange={(e)=>setTeacher(e.target.value)} type="text" placeholder='name' />
    <button onClick={handleTeacherSubmit}>add teacher</button>
    </div>



    <label htmlFor="" >student</label>
    <input onChange={(e)=>setEditStudent({...student,name:e.target.value})} className='border' value={editStudent.name} type="text" />
    <button onClick={handleStudentEdit}>edit student</button>
    <label htmlFor=""> teacher</label>
    <input onChange={(e)=>setEditTeacher({...teacher,name:e.target.value})} className='border' value={editTeacher.name} type="text" />
    <button onClick={handleTeacherEdit}>edit teacher</button>

    
    <div className="mt-10 inline-block w-3/6">
        <h1>teachers</h1>
        {teachers.map(teacher=>(
            <Fragment key={teacher.id}>
            <h1>{teacher.id}</h1>
            <h2>{teacher.name}</h2>
            <button onClick={()=>handleTeacherDelete(teacher.id)}>delete</button>
            <button onClick={()=>setEditTeacher(teacher)}>edit</button>
            </Fragment>
        ))}
    </div>
    <div className="mt-10 inline-block">
        <h1>students</h1>
        {students.map(student=>(
            <Fragment key={student.id}>
            <h1>{student.id}</h1>
            <h2>{student.name}</h2>
            <button onClick={()=>handleStudentDelete(student.id)}>delete</button>
            <button  onClick={()=>setEditStudent(student)}>edit</button>
            </Fragment>
        ))}
    </div>
    <StudentSearch/>
    <TeacherSearch/>
    </>
  )
}
