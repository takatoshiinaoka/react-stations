// DO NOT DELETE
import React from 'react'
import { DogImage } from './DogImage'

let count = 1

export const Description = () => {
    const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
    const hoge = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogUrl(data.message)
        })
        count += 1
    } 
    return (
        <>
            <p>犬の画像を表示するサイトです。現在{count}枚目</p>
            <button onClick={hoge}>更新</button>
            <br/>
            <DogImage url={dogUrl} />
        </>
    )
}