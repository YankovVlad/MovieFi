import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import { LoginBlock } from "./LoginBlock/LoginBlock";
import { LogoutBlock } from "./LogoutBlock/LogoutBlock";
import { Box } from "@material-ui/system";

import { logout } from "../../../actions";

const useStyle = makeStyles((theme) => ({
    mobile: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    desktop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center'
    },
    itemMobile: {
        margin: '1rem 0'
    }
}))

export const UserBlock = ({onClickOpenLogin, onClickOpenRegistration, mobile}) => {

    const dispatch = useDispatch()
    const classes = useStyle()
    const user = useSelector((state) => state.user)

    const onClickLogout = () => {
        dispatch(logout()) 
    }

    return (
        <Box className={mobile ? classes.mobile : classes.desktop}>
            {user ? 
            <LogoutBlock 
                onClickLogout={onClickLogout} 
                user={user} 
                className={mobile ? classes.itemMobile : ''}/>
            :
            <LoginBlock 
                onClickOpenLogin={onClickOpenLogin} 
                onClickOpenRegistration={onClickOpenRegistration} 
                className={mobile ? classes.itemMobile : ''}/>
            }
        </Box>
    )
}