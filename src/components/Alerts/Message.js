import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TitleText from '../Reusable/ReusableComponents/TitleText';
import GreenTick from '../../assets/images/Group 48096533.svg';
import GreenArrow from '../../assets/images/Vector 127.svg';
import CloseIcon from '@mui/icons-material/Close';
import { clearMessages } from '../../store/reducers/message';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#111142',
    color: '#fff',
    borderRadius: '20px',
    // border: '1px solid #000',
    // boxShadow: 24,
};

const style2 = {
    p: 4,
    pt: 0,
    textAlign: 'center'
};

const stylesClasses = {
    btnSx: {
        background: '#9292AB', color: '#000', borderRadius: '14px', marginTop: 3,
        fontFamily: 'Urbanist',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: '#9292AB',
        },
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    }
}

export default function MessageAlert() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const {t} = useTranslation();
    
    const handleClose = (e) => {
      if(e) e.preventDefault();
      setOpen(false);
      dispatch(clearMessages());
    }

    const {title, msg ,status} = useSelector(state=>state.message);

    React.useEffect(()=>{
      setOpen(true);
  },[title, msg, status])

    return msg && status ? (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img style={{ borderRadius: '20px' }} src={GreenArrow} alt=''></img>
                <CloseIcon style={stylesClasses.closeIcon} onClick={handleClose}/>
                <Box sx={style2} >

                    <img
                        style={{ borderRadius: '20px' }}
                        src={GreenTick}
                        alt=''
                    ></img>

                    <TitleText textStyle={{ color: '#fff', fontSize: '2.5rem' }}>
                        {title ? title : ""}
                    </TitleText>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {String(msg)}
                    </Typography>
                    <Button onClick={handleClose} sx={stylesClasses.btnSx} variant="contained" fullWidth type="submit">
                        {t('done')}
                    </Button>
                </Box>

            </Box>
        </Modal >
    ) : false;
}
