// DO NOT DELETE
import React from 'react';

export const BreedsSelect = ({ breeds, onChange, selectedBreed }) => {
  return (
    <select value={selectedBreed} onChange={onChange}>
      <option value="">--Please choose a breed--</option>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
}
