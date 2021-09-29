import { Container, Box} from "@material-ui/core";

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserReviews } from "../../actions";
import { ChangeDialog } from "../../components/ChangeDialog/ChangeDialog";
import { PersonalData } from "./PersonalData/PersonalData";
import { PersonalReviews } from "./PersonalReviews/PersonalReviews"
import { NotAuthorizedBlock } from "./NotAuthorizedBlock/NotAuthorizedBlock";

export const Profile = ({onClickOpenLogin, onClickOpenRegistration}) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    const isOpen = useSelector((state) => state.changeDialog)

   
    

    useEffect(() => {
        dispatch(getUserReviews(user?.id))
    }, [dispatch, user])

    return (
        <Container>
            {user ? 
            <>
                <Box >
                    <PersonalData user={user}/>
                    <PersonalReviews user={user}/>
                </Box>
                <ChangeDialog isOpen={isOpen}/>
            </>
            : 
            <NotAuthorizedBlock onClickOpenLogin={onClickOpenLogin} onClickOpenRegistration={onClickOpenRegistration} />
            }
        </Container>
    )
}