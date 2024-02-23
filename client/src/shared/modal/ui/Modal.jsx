import React, { useState } from 'react'
import style from './style.module.scss'

import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { DialogActions } from '@mui/material'
import { Button } from '@shared/Button';

export const Modal = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <Dialog 
                classes={{ paper: style.modal }} 
                open={props.open} 
                onClose={handleOpen}
                maxWidth={'lg'}
            >
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent className={style['modal-content']}>
                    <DialogContentText className={style['modal-text']}>
                        {props.children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {props.additionalActions}
                    <Button onClick={props.onClose} variable={'tertiary'}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
