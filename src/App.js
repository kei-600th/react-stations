// DO NOT DELETE
// App.js
import React from 'react';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';
import './App.css';

export const App = () => (
  <div>
    <Header />
    <Description />
    <DogListContainer />
  </div>
);
