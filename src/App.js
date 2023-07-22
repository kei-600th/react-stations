// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/papillon/n02086910_7156.jpg")
  return (
    <div>
      <header>
        <h1>DogsAPP</h1>
      </header>
      <img src={dogUrl} alt="Example" />
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/papillon/n02086910_7609.jpg")}>犬変更</button>
      <h2>Hello, world!</h2>
    </div>
  )
}
