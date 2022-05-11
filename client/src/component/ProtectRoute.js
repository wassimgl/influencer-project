import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = () => {
  const {isAuth} =  useSelector(state=>state.user)
  return (
    <div>
    {isAuth? <Outlet/>: <Navigate to='/loginadmin'/>}
    </div>
  )
}

export default ProtectRoute