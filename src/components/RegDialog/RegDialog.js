import React from "react"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useDispatch, useSelector } from "react-redux";
import { ACTIONS_TYPES } from "../../constants/constants";
import { registerUser } from "../../requests/requests";
import { EmailTwoTone } from "@material-ui/icons";


export const RegDialog = () => {

    const dispatch = useDispatch()
    const open = useSelector((state) => state.registrationDialog)
    const email = useSelector((state) => state.registrationEmail)
    const password = useSelector((state) => state.registrationPassword)
    const nickname = useSelector((state) => state.registrationNickname)

    const onClickClose = () => {
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION})
    }

    const onChangeNickname = (event) => {
        dispatch({type: ACTIONS_TYPES.CHANGE_NICKNAME_REGISTRATION, payload: event.target.value})
    }
    const onChangeEmail = (event) => {
        dispatch({type: ACTIONS_TYPES.CHANGE_EMAIL_REGISTRATION, payload: event.target.value})
    }
    const onChangePassword = (event) => {
        dispatch({type: ACTIONS_TYPES.CHANGE_PASSWORD_REGISTRATION, payload: event.target.value})
    }
    const onClickDone = () => {
        registerUser({email: email, password: password, nickname: nickname})
        dispatch({type: ACTIONS_TYPES.RESET_FORM_REGISTRATION})
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION})
    }

 return(
    <Dialog open={open} onClose={onClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Registration</DialogTitle>
        <DialogContent>
            
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nickname"
            type="text"
            fullWidth
            onChange={onChangeNickname}
            value={nickname}
        />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={onChangeEmail}
            value={email}
        />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            onChange={onChangePassword}
            value={password}
        />
        
        </DialogContent>
        <DialogActions>
            <Button onClick={onClickClose} color="primary">
                Cancel
            </Button>
            <Button onClick={onClickDone} color="primary">
                Done
            </Button>
        </DialogActions>
  </Dialog>
 )
}
