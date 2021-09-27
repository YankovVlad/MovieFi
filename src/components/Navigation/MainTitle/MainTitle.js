import React from "react"
import { Box } from "@mui/material"
import { Title } from "../../Title/Title"


export const MainTitle = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Title 
                variant='h5'>
                Movie
            </Title>
            <Title 
                variant='h4' 
                sx={{fontFamily: 'Dancing Script, cursive', color: 'red'}}>
                Find
            </Title>
        </Box>
    )
}