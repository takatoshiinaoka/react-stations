/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// DO NOT DELETE
import React from "react";
import { DogImage } from "./DogImage";

const imgNum = 12

export const BreedsSelect = (props) => {
    const getImgsUrl = `https://dog.ceo/api/breed/${props.selectedBreed}/images/random/${imgNum}`

    const handleChange = (e) => (props.setSelectedBreed(e.target.value))

    const handleGetBreedsUrl = () => {
        fetch(getImgsUrl)
            .catch(e => console.log(e))
            .then(res => res.json())
            .then(data => props.setBreedsUrls(data.message))
    }

    return (
        <div>
            <div>
                Breeds List
                <select value={props.selectedBreed} onChange={(e) => handleChange(e)}>
                    {props.breeds.map((item) => <option value={item}>{item}</option>)}
                </select>
                <button onClick={handleGetBreedsUrl}>表示</button>
            </div>
            <div>
                {props.breedsUrls.map(url => <DogImage url={url} />)}
            </div>
        </div>
    )
}