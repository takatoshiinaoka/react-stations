// DO NOT DELETE
import React from "react";
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
    const [breeds, setBreeds] = React.useState([])
    const [selectedBreed, setSelectedBreed] = React.useState()
    const dogListUrl = "https://dog.ceo/api/breeds/list/all"

    React.useEffect(() => {
        fetch(dogListUrl)
        .then(res => res.json())
        .then(data => {
            const array = []
            for(let i in data.message){
                array.push(i)
            }
            setBreeds(array)
        })
    },[])

    return (
        <BreedsSelect  
            breeds={breeds} 
            selectedBreed={selectedBreed} 
            setSelectedBreed={setSelectedBreed} 
        />
    )
}