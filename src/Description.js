// DO NOT DELETE
// Description.js
import React, { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/papillon/n02086910_7156.jpg");

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
      <DogImage url={dogUrl} />
      <button onClick={fetchRandomDogImage}>犬変更</button>
    </div>
  );
}
