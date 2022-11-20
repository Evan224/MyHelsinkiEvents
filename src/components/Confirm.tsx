import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Button from '@mui/material/Button';

interface ConfirmProps {
    title: string;
    content: string;
    handleClose: (any) => void;
    open: boolean;
}

export default function ConfirmBox (props:ConfirmProps): JSX.Element {
    const { title, content, handleClose,open } = props;

    return (
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {title}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   {content}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose(false)}>Disagree</Button>
                    <Button onClick={()=>handleClose(true)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
             </Dialog>
    )
}