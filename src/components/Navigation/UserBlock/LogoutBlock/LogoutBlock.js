import React from "react";
import { IconButton, Typography } from "@mui/material";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const LogoutBlock = ({onClickLogout, user}) => {
    return (
        <>
            <Typography 
                sx={{display: 'flex', alignItems: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                {user.firstName} {user.lastName}
            </Typography>
            <IconButton onClick={onClickLogout}>
                <ExitToAppIcon color="error"/> 
            </IconButton>
        </>
    )
}