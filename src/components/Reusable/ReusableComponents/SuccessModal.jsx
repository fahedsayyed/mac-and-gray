import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TitleText from './TitleText';
import GreenTick from '../../../assets/images/Group 48096533.svg';
import GreenArrow from '../../../assets/images/Vector 127.svg';
import CloseIcon from '@mui/icons-material/Close';

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

export default function SuccessModal() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img style={{ borderRadius: '20px' }} src={GreenArrow}></img>
                <CloseIcon style={stylesClasses.closeIcon} />
                <Box sx={style2} >

                    <img
                        style={{ borderRadius: '20px' }}
                        src={GreenTick}
                    ></img>

                    <TitleText textStyle={{ color: '#fff', fontSize: '2.5rem' }}>
                        Woo hoo !
                    </TitleText>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your password has been
                        reset successfully
                    </Typography>
                    <Button sx={stylesClasses.btnSx} variant="contained" fullWidth type="submit">
                        Done
                    </Button>
                </Box>

            </Box>
        </Modal >
    );
}
