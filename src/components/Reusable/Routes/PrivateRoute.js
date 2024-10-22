import { Outlet, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { useAuth } from '../../../hooks/useAuth';
import SideMenu from '../SideBar';
import { loadUser, removeNextPath, sessionTimeout, setNextPath } from '../../../store/reducers/auth';

const PrivateRoute = () => {

  const {isAuthenticated, expiresAtDate} = useSelector((state) => state.auth);
  const nextPath = useSelector(state=> state.auth.next);
  const idToken = useAuth();
  const dispatch = useDispatch();
  let location = useLocation();

  const public_routes = ['login', 'signup', 'logout', 'forgot-password', 'reset-password'];

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch, location])

  useEffect(()=>{
    const is_public = public_routes.filter(route=>location.pathname.includes(route)|| route.includes(location.pathname)).length
    if(location.pathname && !(idToken && isAuthenticated) && !is_public && location.pathname !=="/"){
      dispatch(setNextPath(location.pathname));
    }
  },[location])

  useEffect(()=>{
    if(idToken && isAuthenticated === true && nextPath && location.pathname === nextPath){
      dispatch(removeNextPath())
    }
  },[isAuthenticated, location])

  useEffect(()=>{
    if(expiresAtDate){
      const expiresAtDateIns = new Date(expiresAtDate);
      const now = new Date();
      const timeleft_in_milisec = (expiresAtDateIns - now)
      const timeout_ins = setTimeout(()=>{
        dispatch(sessionTimeout())
      },[timeleft_in_milisec])
      return (()=>{
        clearTimeout(timeout_ins);
      })
    }
  },[dispatch, expiresAtDate])

  return idToken && isAuthenticated === true ? 
          nextPath ? <Navigate to={nextPath}/>:
          location && location.pathname==="/" ? 
            <Navigate to="/overview" /> : (
              <SideMenu>
                <Outlet />
              </SideMenu>
            ) : (
              <Navigate to={`/login?${ nextPath && `next=${nextPath}` || ''}`} />
            )
}

export default PrivateRoute
