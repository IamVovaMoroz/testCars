import React from 'react';
import CarCard from './CarCard'; // Импортируем компонент CarCard
import './CarContainer.css'; // Импортируем файл стилей

const CarContainer = ({ cars }) => {
  return (
    <div className='car-container'>
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarContainer;
