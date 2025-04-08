import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({isAuth,children}) {
  return isAuth ? <Outlet/> : <Navigate to={'/'}/>
}
