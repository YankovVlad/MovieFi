import { Box, Button } from "@material-ui/core"
import { Text } from '../../../components/Text/Text'

export const NotAuthorizedBlock = ({onClickOpenLogin, onClickOpenRegistration}) => {


    return (
        <Box>
            <Text >You are not authorized. Click "Log In" for authorization or "Sign Up" for registration</Text>
            <Button color="primary" onClick={onClickOpenLogin} >Log In</Button>
            <Button color="warning" onClick={onClickOpenRegistration} >Sign Up</Button>
        </Box>
    )
}