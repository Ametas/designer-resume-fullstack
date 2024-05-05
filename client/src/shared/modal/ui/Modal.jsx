import React, { useState } from 'react'
import style from './style.module.scss'

import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { DialogActions } from '@mui/material'
import { Button } from '@shared/Button';

import { RxCross1 } from "react-icons/rx";

export const Modal = (props) => {
  const [open, setOpen] = useState(props.open)

  const handleOpen = () => {
    setOpen(!open)
    if(props.onClose) { props.onClose() }
  };

  return (
    <div>
      <Dialog 
        classes={{ paper: style.modal }} 
        open={open} 
        onClose={handleOpen}
        maxWidth={'lg'}
        fullWidth={true}
        disableEnforceFocus
      >
        <DialogTitle className={style['modal-title']}>{props.title}</DialogTitle>
        <DialogContent className={style['modal-content']}>
          <DialogContentText className={style['modal-text']}>
            {props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={style['modal-actions']}>
          {props.additionalActions}
          <Button 
            onClick={props.onClose} 
            variable={'primary'}
            size={'square'}
          >
            <RxCross1 />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
