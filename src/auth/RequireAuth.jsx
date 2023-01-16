import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet,  } from 'react-router-dom'
import { getAdmin } from '../features/admin/adminSlice'

export default function RequireAuth() {
    const admin = useSelector(getAdmin)
  return (
    <>
    {admin?<Outlet/>:<Navigate to={'/login'}/>}
    </>
  )
}
