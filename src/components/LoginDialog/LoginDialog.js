import React, { useEffect } from "react"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS_TYPES } from "../../constants/constants";
import { loginUser } from "../../actions";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


export const LoginDialog = () => {
    
    const dispatch = useDispatch()
    const open = useSelector((state) => state.loginDialog)
    const email = useSelector((state) => state.loginEmail)
    const password = useSelector((state) => state.loginPassword)

    const onClickClose = () => {
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_LOGIN})
    }
    const onChangeEmail = (event) => {
        dispatch({type: ACTIONS_TYPES.CHANGE_EMAIL_LOGIN, payload: event.target.value})
    }
    const onChangePassword = (event) => {
        dispatch({type: ACTIONS_TYPES.CHANGE_PASSWORD_LOGIN, payload: event.target.value})
    }
    const onClickDone = () => {
        dispatch(loginUser({email: email, password: password}))
        dispatch({type: ACTIONS_TYPES.RESET_FORM_LOGIN})
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_LOGIN})
    }

    useEffect(() => {
        dispatch({type: ACTIONS_TYPES.AUTH_USER, payload: JSON.parse(sessionStorage.getItem('user'))})
    },[])


 return(
    <Dialog open={open} onClose={onClickClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
        <DialogContent>
            
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
