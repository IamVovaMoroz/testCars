import React from 'react';
import jsonData from '../../src/data/cars2.json';
// import Car from './CarCard'; // Импортируем компонент Car
import CarContainer from './CarContainer'; // Импортируем компонент CarContainer

export const App = () => {
  return (
    <div className="App">
      <CarContainer cars={jsonData} /> {/* Передаем массив машин в CarContainer */}
    </div>
  );
};
