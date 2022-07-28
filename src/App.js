// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

let count = 0

export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
  const hoge = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
        count += 1
        // console.log(`${count}回：${data.message}`)
      })
  } 
  console.log(dogUrl)
  return (
    <>
    <header>
      <h1>Dog アプリ!</h1>
    </header>
    <p>犬の画像を表示するサイトです。現在{count+1}枚目</p>
    <button onClick={hoge}>更新</button>
    <br/>
    <img src={dogUrl} />
    
    
    </>
  )
}





