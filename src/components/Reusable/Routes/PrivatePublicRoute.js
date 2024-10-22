import { Outlet, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import SideMenu from '../SideBar';

const PrivatePublicRoute = () => {
    let location = useLocation();
  
    return  location && location.pathname==="/" ? 
        <Navigate to="/overview" /> : (
          <SideMenu>
            <Outlet />
          </SideMenu>
        )
}

export default PrivatePublicRoute
