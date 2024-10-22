import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./style.scss";

import SideMenuItems from '../../../constants/SideMenuitem';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useMobile from '../../../hooks/useMobile';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const {t} = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMobile();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <>
        {isMobile?(<Paper id='btm-nav-paper' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
                <BottomNavigation
                id='btm-nav'
                showLabels={true}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                >{isAuthenticated && SideMenuItems.map((item, index) => {
                    if(!item.bottomNav) return false;
                    return (
                            <BottomNavigationAction onClick={()=>handleClick(item.path)} key={index} label={t(item.label)} icon={item.icon} />
                        )
                })}
                </BottomNavigation>
        </Paper>):false}
    </>
  );
}
