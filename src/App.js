// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/papillon/n02086910_7156.jpg")

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>DogsAPP</h1>
      </header>
      <img src={dogUrl} alt="Example" />
      <button onClick={fetchRandomDogImage}>犬変更</button>
      <h2>Hello, world!</h2>
    </div>
  )
}
