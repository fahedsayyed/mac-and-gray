import { Grid, MenuItem, Select, Typography } from '@mui/material'
import { styled } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { setLoginId } from '../../../store/reducers/dashboard';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { useNavigate } from 'react-router-dom';


const AccountMetricsHeader = ({title}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user_accounts, metrics_login_id} = useSelector(state=>state.dashboard);

    const [open, setOpen] = useState(false);
    const selected_account_login_id = useMemo(()=>{
        const result = (user_accounts && metrics_login_id) && user_accounts.length && user_accounts.filter(acc=>acc.login_id===metrics_login_id);
        if(result && result.length) return result[0].login_id;
        return ''
    },[user_accounts, metrics_login_id])

    const StyleSelect = styled(Select)`
            .MuiOutlinedInput-notchedOutline{
                border: none
            }
            .MuiSelect-select.MuiSelect-outlined{
                padding-left: 0;
                padding-top: 0;
                padding-bottom: 0;
            }
            .MuiSvgIcon-root{
                position: absolute !important;
                right: 0 !important;
                pointer-events: none !important;
                background: #9292AB;
                border-radius: 50%;
                path{
                    color: rgba(255, 255, 255, 0.02);
                }
            }
            .MuiSvgIcon-root.active{
                transform: rotate(180deg);
            }
            `;

    useEffect(()=>{
        metrics_login_id && navigate(`/accountmetrics/${metrics_login_id}`);
    },[metrics_login_id])


    return (
        <Grid container flexDirection={'column'}>
            <Grid item>
                <Typography id="title" variant="h6" noWrap component="div">
                    {t(title)}
                </Typography>
            </Grid>
            <Grid item>
                <StyleSelect
                    autoWidth={true}
                    displayEmpty
                    name="account-id"
                    value={selected_account_login_id}
                    onChange={(e)=>dispatch(setLoginId(e.target.value))}
                    renderValue={(value)=>{
                        const result = user_accounts && user_accounts.length && user_accounts.filter(acc=>acc.login_id===value)
                        if(result && result.length) return result[0].title;
                        return ''
                    }}
                    inputProps={{ 'aria-label': 'account-id' }}
                    IconComponent={()=><ExpandCircleDownRoundedIcon className={open?'active': ''}/>}
                    sx={{
                        fontWeight: '500',
                        fontSize: '16px',
                        color: "#8F8F8F"
                    }}
                    open={open}
                    onOpen={(event)=>setOpen(true)}
                    onClose={(event)=>setOpen(false)}
                >
                    {user_accounts && user_accounts.length && user_accounts.map(item=>{
                        return (<MenuItem key={item.id} value={item.login_id}>{item.title}</MenuItem>)
                    })}
                </StyleSelect>
            </Grid>
        </Grid>
    )
}

export default AccountMetricsHeader
