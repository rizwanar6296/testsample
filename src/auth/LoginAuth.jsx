import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getAdmin } from '../features/admin/adminSlice'
import { LoginPage } from '../pages/LoginPage'

export const LoginAuth = () => {
    const admin = useSelector(getAdmin)
  return (
    <>
    {admin ? <Navigate to='/dashboard'/>:<Outlet/>}
    </>
  )
}
