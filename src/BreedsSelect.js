/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// DO NOT DELETE
import React from "react";

export const BreedsSelect = (props) => {
    
    const handleChange = (e) => (props.setSelectedBreed(e.target.value))

    return (
        <>
        <select onChange={(e) => handleChange(e)}>
            {props.breeds.map((item) => <option value={item}>{item}</option>)}
        </select>
        </>
    )
}