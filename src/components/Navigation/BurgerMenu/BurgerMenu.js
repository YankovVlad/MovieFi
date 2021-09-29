import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { createTheme } from '@material-ui/system';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { UserBlock } from '../UserBlock/UserBlock';
import { IconButton } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  link: {
    width: '100%',
    margin: '1rem 0',
    textDecoration: 'none',
    textAlign: 'center',
    color: 'black',
    
  }
}))
const theme = createTheme()

export const BurgerMenu = ({onClickOpenLogin, onClickOpenRegistration}) => {
  const classes = useStyle()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };
  const onClickOpenMenu = () => {
    setOpen(true)
  }
  const onClickCloseMenu = () => {
    setOpen(false)
}

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
         <UserBlock
            mobile={matches}
            onClickOpenLogin={onClickOpenLogin}
            onClickOpenRegistration={onClickOpenRegistration}
            />
         <Box className={classes.box}>
            <Link to='/' className={classes.link}> Home </Link>
            <Link to='/profile' className={classes.link}> Profile </Link>
            <Link to='/about' className={classes.link}> About Us</Link>
          </Box>
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment >
          <IconButton onClick={onClickOpenMenu} sx={{color: 'white'}}>
            <MenuIcon/>
          </IconButton>
          <Drawer
            anchor= 'right'
            open={open}
            onClose={onClickCloseMenu}
          >
          {list('right')}
           
          </Drawer>
        </React.Fragment>
    </div>
  );
}
