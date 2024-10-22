import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../../store/reducers/auth'
import { resetDashboard } from '../../store/reducers/dashboard';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logout());
        dispatch(resetDashboard())
    },[dispatch])
  return (
    <div>
      
    </div>
  )
}

export default Logout
