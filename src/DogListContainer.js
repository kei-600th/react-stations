// DO NOT DELETE
import React, { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState("")

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      const breedsList = Object.keys(data.message);
      setBreeds(breedsList);
    };

    fetchBreeds();
  }, []);


  return (
    <div>
      <h2>Hello, React!</h2>
    </div>
  )
}