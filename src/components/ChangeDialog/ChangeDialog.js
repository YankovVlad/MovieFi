import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { closeChangeDialog, changePersonalData } from '../../actions';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export const ChangeDialog = ({isOpen}) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [favoriteGenres, setFavoriteGenres] = useState('')
  
    const onClickClose = () => {
      dispatch(closeChangeDialog())
    };

    const onChangeInput = (event) => {
      switch (event.target.name) {
        case 'firstName': setFirstName(event.target.value)
        break;
        case 'lastName': setLastName(event.target.value)
        break;
        case 'age': setAge(event.target.value)
        break;
        case 'favoriteGenres': setFavoriteGenres(event.target.value)
        break;
      }
    }
    const onClickSave = () => {
      dispatch(changePersonalData(user.id, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        favoriteGenres: favoriteGenres
      }))
      dispatch(closeChangeDialog())
       
    }

    useEffect(() => {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setAge(user.age)
        setFavoriteGenres(user.favoriteGenres)
    },[])

    return (
      <>
        <Dialog open={isOpen} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
          <DialogTitle id="form-dialog-title">Personal data</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                name="firstName"
                label="First name"
                type="text"
                value={firstName}
                onChange={onChangeInput}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="lastName"
                label="Last name"
                type="text"
                value={lastName}
                onChange={onChangeInput}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="age"
                label="Age"
                type="number"
                value={age}
                onChange={onChangeInput}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="favoriteGenres"
                label="Favorite genres"
                type="text"
                value={favoriteGenres}
                onChange={onChangeInput}
                fullWidth
              />
            </DialogContent>
          <DialogActions>
          <Button onClick={onClickClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={onClickSave} color="primary" variant='contained'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
    )
}