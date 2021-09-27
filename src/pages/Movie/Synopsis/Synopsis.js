import React from 'react'
import { Box } from '@mui/material';
import { Text } from '../../../components/Text/Text'
import { Title } from '../../../components/Title/Title'

export const Synopsis = ({movieDetails}) => {

    return (
        <Box>
            <Title variant='h4'>Synopsis</Title>
            <Text>{movieDetails.Plot}</Text>
        </Box>
    )
}