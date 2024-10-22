import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Payments = () => {
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname==='/payments'){
      navigate('/payments/funding-evaluation')
    }
  },[location, navigate])
  return (
    <div>
    <Outlet/>
    </div>
  )
}

export default Payments
