// DO NOT DELETE
import React, { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect'; // 名前付きエクスポートからBreedsSelectをインポート

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      const breedsList = Object.keys(data.message);
      setBreeds(breedsList);
    };

    fetchBreeds();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  return (
    <div>
      <h2>Hello, React!</h2>
      <BreedsSelect breeds={breeds} onChange={handleSelectChange} selectedBreed={selectedBreed} />
    </div>
  )
}

