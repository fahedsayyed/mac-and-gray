import { Grid } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "./style.scss"

import languages from '../../../constants/language';
import TranslateIcon from '@mui/icons-material/Translate';
import { Select, MenuItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { saveAccountSettings } from '../../../store/reducers/settings';

import login_en from "../../../assets/images/login_page_english.jpg" ;
import signup_en from  "../../../assets/images/signup_page_english.jpg";
import login_es from  "../../../assets/images/login_page_spanish.jpg";
import signup_es from  "../../../assets/images/signup_page_spanish.jpg";
import defaultGraphic from "../../../assets/images/signup-bg1.svg";


const DefaultPage = (props) => {

  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [language, setLanguage] = useState("");
  const account_settings = useSelector(state=>state.settings.account_settings)
  const bgImg = useMemo(()=>{
    if(props.title){

      if(props.title === 'login') return language === 'es' ? login_es:login_en;

      if(props.title === 'signup') return language === 'es' ? signup_es:signup_en;
      
    }
    return defaultGraphic;
  },[props, language]);

  useEffect(()=>{
    setLanguage(account_settings.language);
  },[account_settings])

  const handleLangChange = (e) =>{
    const language = e.target.value;
    // i18n.changeLanguage(e.target.value);
      dispatch(saveAccountSettings({
        language,
        time_zone: account_settings.time_zone
      }))
  }


  return (
    <Grid container spacing={0} className="signup-form-ctn">
      <Grid item className="banner" md={5.5} sx={{backgroundImage: `url(${bgImg})` || ''}}>
        {!props.title?<div className="banner-text">
          <h1>{t('hi')},</h1>
          {props.message?<p>{props.message}</p>:false}
        </div>:false}
      </Grid>
      <Grid item md={6.5} xs={12} className="signup-form">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          renderValue = {(value)=>(
                          <>
                            <TranslateIcon />
                            <span style={{color:'white'}}>{languages.filter(i=>i.code===value)[0].name}</span>
                          </>
                        )}
          sx={{
            float: 'right',
            borderRadius: '30px', '&:before': {
              borderColor: 'red',
            },
            '&:after': {
              borderColor: 'red',
            }, "& .MuiSelect-select": { display: 'flex', padding: '5px 32px 5px 14px' }, "& .MuiSelect-icon": { fill: '#9292AB' }
          }}
          onChange={handleLangChange}
        >
          {languages.map(lng=>(
          <MenuItem 
            key={lng.code}
            value={lng.code}
          >
            <ListItemText primary={lng.name} sx={{ '& .MuiTypography-root': { color: '#8F8F8F' } }} />
          </MenuItem>
          ))}
        </Select>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default DefaultPage
