// DO NOT DELETE
import React from 'react'
import { DogImage } from './DogImage'

let count = 1
const getImgUrl = "https://dog.ceo/api/breeds/image/random"
const defaultImg = "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"

export const Description = () => {
    const [dogUrl, setDogUrl] = React.useState(defaultImg)
    
    const handleGetDogUrl = () =>{
        fetch(getImgUrl)
            .then(res => res.json())
            .then(data => {
                setDogUrl(data.message)
            })
        count += 1
    } 

    return (
        <div className='description'>
            <div className='about'>
                <p>犬の画像を表示するサイトです。<br/>現在{count}枚目</p>
            </div>
            <div className='photo'>
                <DogImage url={dogUrl} /> <br/>
                <button onClick={handleGetDogUrl}>更新</button>
            </div>
        </div>
    )
}