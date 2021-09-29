import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Text } from '../Text/Text'
import { ACTIONS_TYPES } from "../../constants/constants";
import { registerUser } from "../../actions";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


export const RegDialog = () => {

    const dispatch = useDispatch()
    const open = useSelector((state) => state.registrationDialog)
    const error = useSelector((state) => state.error)
    const visibilityError = useSelector((state) => state.visibilityError)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const onClickClose = () => {
        dispatch({type: ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION})
    }

    const onChangeInput = (event) => {
        switch (event.target.name) {
            case 'firstName': setFirstName(event.target.value)
            break;
            case 'lastName': setLastName(event.target.value)
            break;
            case 'email': setEmail(event.target.value)
            break;
            case 'password': setPassword(event.target.value)
            break;
        }
    }
    const onClickDone = () => {
        if (firstName === '' ||
            lastName === '' ||
            email === '' ||
            password ==='') {
                dispatch({type: ACTIONS_TYPES.ERROR, payload: 'Some fields is empty. Please fill in the filds'})
                dispatch({type: ACTIONS_TYPES.VISIBILITY_ERROR_ON})
                setTimeout(() => {
                    dispatch({type: ACTIONS_TYPES.VISIBILITY_ERROR_OFF})
                }, 3000)
            } else {
                dispatch(registerUser({email: email, password: password, firstName: firstName, lastName: lastName}))
                // dispatch(loginUser({email: email, password: password}))
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
            }
        
    }

 return(
    <Dialog open={open} onClose={onClickClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
        <DialogTitle id="form-dialog-title">Registration</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                name="firstName"
                label="First name"
                type="text"
                fullWidth
                onChange={onChangeInput}
                value={firstName}
            />
            <TextField
                autoFocus
                margin="dense"
                name="lastName"
                label="Last name"
                type="text"
                fullWidth
                onChange={onChangeInput}
                value={lastName}
            />
            <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                onChange={onChangeInput}
                value={email}
            />
            <TextField
                autoFocus
                margin="dense"
                name="password"
                label="Password"
                type="password"
                fullWidth
                onChange={onChangeInput}
                value={password}
            />
            <Text 
                sx={visibilityError ? {height: '1rem', color: 'red'}:{height: '1rem', color:'white'}}>
                {error}
                </Text>
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
