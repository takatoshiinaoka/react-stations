/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// DO NOT DELETE
import React from "react";
import { Grid } from "@material-ui/core";
import { DogImage } from "./DogImage";
import { BreedsList } from "./BreedsList";

const imgNum = 12



const Gallary = (props) => {
    const { urls } = props
    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {urls.map(url => (
                <Grid item xs={4}>
                    <DogImage url={url} />
                </Grid>
            ))}
        </Grid>
    )
}

export const BreedsSelect = (props) => {
    const { 
        breeds,
        breedsUrls, 
        setBreedsUrls, 
        selectedBreed, 
        setSelectedBreed 
    } = props

    const getImgsUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${imgNum}`

    const handleChange = (e) => (setSelectedBreed(e.target.value))

    const handleGetBreedsUrl = async () => {
        await fetch(getImgsUrl)
            .catch(e => console.log(e))
            .then(res => res.json())
            .then(data => setBreedsUrls(data.message))
    }

    return (
        <>
            <BreedsList 
                breeds={breeds}
                selectedBreed={selectedBreed}
                handleChange={handleChange}
                handleGetBreedsUrl={handleGetBreedsUrl}
            />
            <Gallary 
                urls={breedsUrls} 
            />
        </>
    )
}