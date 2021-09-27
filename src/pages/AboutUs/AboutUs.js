import React from 'react'
import { Container } from '@material-ui/core'
import { Text } from '../../components/Text/Text'

export const AboutUs = () => {

    return (
        <Container>
            <Text sx={{margin: '2rem 0', fontFamily: 'Montserrat, sans-serif'}}>
            Hi, my dear friend. My name is Vlad and this is my finale project in TeachMeSkills school. This project will be upgrade and develop. I have a lot of ideas for this. For example I want to add 'want to watch' list and 'did watch' list, recomendations onfavorite genres, counter movie hours and many other.
            </Text>
        </Container>
    )
}