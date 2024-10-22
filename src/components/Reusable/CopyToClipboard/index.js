import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';

const CopyToClipboard = (value) => {

    const [copied, setCopied] = useState(false);

    const updateClipboard = (newClip) => {
        navigator.clipboard.writeText(newClip.value).then(() => {
            /* clipboard successfully set */
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            },3000)
        }, () => {
            /* clipboard write failed */
        });
    }
  return (
    <IconButton color="primary" aria-label="upload picture" component="label" onClick={(e)=>updateClipboard(value)}>
        {copied?<CheckIcon/>:<ContentCopyIcon/>}
    </IconButton>
  )
}

export default CopyToClipboard
