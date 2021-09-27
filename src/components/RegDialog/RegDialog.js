import React, { useState } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

import { ACTIONS_TYPES } from "../../constants/constants";
import { registerUser } from "../../actions";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


export const RegDialog = () => {

    const dispatch = useDispatch()
    const open = useSelector((state) => state.registrationDialog)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onClickClose = () => {
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION})
    }

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event) => {
        setLastName(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onClickDone = () => {
        dispatch(registerUser({email: email, password: password, firstName: firstName, lastName: lastName}))
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION})
    }

 return(
    <Dialog open={open} onClose={onClickClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Registration</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="First name"
                type="text"
                fullWidth
                onChange={onChangeFirstName}
                value={firstName}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Last name"
                type="text"
                fullWidth
                onChange={onChangeLastName}
                value={lastName}
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
            <Button onClick={onClickClose} color="primary" variant="outlined">
                Cancel
            </Button>
            <Button onClick={onClickDone} color="primary" variant="contained">
                Done
            </Button>
        </DialogActions>
  </Dialog>
 )
}
