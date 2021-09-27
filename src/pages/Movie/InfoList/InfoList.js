import React from "react"
import { Text } from "../../../components/Text/Text";

export const InfoList = ({movieDetails}) => {

    return (
        <>
            <Text ><span style={{color: 'red'}}>Year: </span>{movieDetails.Year}</Text>
            <Text ><span style={{color: 'red'}}>Rated: </span>{movieDetails.Rated}</Text>
            <Text ><span style={{color: 'red'}}>Release: </span>{movieDetails.Released}</Text>
            <Text ><span style={{color: 'red'}}>Release DVD: </span>{movieDetails.DVD}</Text>
            <Text ><span style={{color: 'red'}}>Runtime: </span>{movieDetails.Runtime}</Text>
            <Text ><span style={{color: 'red'}}>Genre: </span>{movieDetails.Genre}</Text>
            <Text ><span style={{color: 'red'}}>Director: </span> {movieDetails.Director}</Text>
            <Text ><span style={{color: 'red'}}>Writer: </span> {movieDetails.Writer}</Text>
            <Text ><span style={{color: 'red'}}>Actors: </span> {movieDetails.Actors}</Text>
            <Text ><span style={{color: 'red'}}>Language: </span> {movieDetails.Language}</Text>
            <Text ><span style={{color: 'red'}}>Country: </span> {movieDetails.Country}</Text>
            <Text ><span style={{color: 'red'}}>Awards: </span> {movieDetails.Awards}</Text>
            <Text ><span style={{color: 'red'}}>Metascore: </span> {movieDetails.Metascore}</Text>
            <Text ><span style={{color: 'red'}}>IMDB Rating: </span> {movieDetails.imdbRating}</Text>
            <Text ><span style={{color: 'red'}}>Production: </span> {movieDetails.Production}</Text>
        </>
    )
}