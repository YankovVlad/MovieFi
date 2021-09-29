import React from "react";
import { Button } from "@mui/material";


export const LoginBlock = ({onClickOpenLogin, onClickOpenRegistration}) => {
    return (
        <>
            <Button
                disableElevation
                color="primary"
                onClick={onClickOpenLogin} 
                sx={{fontFamily: 'Montserrat, sans-serif', margin: '0 1rem', padding: '8px 0'}}>
                Log In
            </Button>
            <Button 
                color="error" 
                onClick={onClickOpenRegistration} 
                sx={{fontFamily: 'Montserrat, sans-serif', margin: '0 1rem', padding: '8px 0'}}>
                Sign Up
            </Button>
        </>
    )
}