
import React, { useState } from 'react';
import CarCard from './CarCard'; // Импортируем компонент CarCard
import './CarContainer.css'; // Импортируем файл стилей

const CarContainer = ({ cars }) => {
    const [carsToShow, setCarsToShow] = useState(12); // Изначально показываем 12 машин

    const loadMoreCars = () => {
        setCarsToShow(carsToShow + 12); // Увеличиваем количество машин на 12
      };

  return (
    <div className='car-container'>
      {cars.slice(0, carsToShow).map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      {carsToShow < cars.length && (
        <button className="load-more-button" onClick={loadMoreCars}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarContainer;
