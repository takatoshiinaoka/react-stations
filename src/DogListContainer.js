// DO NOT DELETE
import React from "react";

export const DogListContainer = () => {
    const [breeds, setBreeds] = React.useState([])
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
        <>
        <select title="dogList">
            {breeds.map((item, index) => <option value={index}>{item}</option>)}
        </select>
        </>
    )
}