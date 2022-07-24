// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
  const hoge = () => setDogUrl("")
  console.log(dogUrl)
  return (
    <>
    <header>
      <h1>Dog アプリ!</h1>
    </header>
    <p>犬の画像を表示するサイトです。</p>
    <img src={dogUrl} />
    </>
  )
}





