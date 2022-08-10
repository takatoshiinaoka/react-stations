// DO NOT DELETE
import React from "react";
import { BreedsSelect } from './BreedsSelect'

const defaultBreed = "affenpinscher"
const getBreedsUrl = "https://dog.ceo/api/breeds/list/all"

export const DogListContainer = () => {
    const [breeds, setBreeds] = React.useState([])
    const [breedsUrls, setBreedsUrls] = React.useState([])
    const [selectedBreed, setSelectedBreed] = React.useState(defaultBreed)

    React.useEffect(() => {
        fetch(getBreedsUrl)
        .then(res => res.json())
        .then(data => {
            /**
             * この辺、もう少し短くかけないかな？
             */
            const array = []
            for(let i in data.message)
                array.push(i)
            setBreeds(array)
        })
    },[])

    return (
        <BreedsSelect  
            breeds={breeds} 
            breedsUrls={breedsUrls}
            setBreedsUrls={setBreedsUrls}
            selectedBreed={selectedBreed} 
            setSelectedBreed={setSelectedBreed} 
        />
    )
}