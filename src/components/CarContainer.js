// import React, { useState } from 'react';
// import CarCard from './CarCard'; // Импортируем компонент CarCard
// import './CarContainer.css'; // Импортируем файл стилей

// const CarContainer = ({ cars }) => {
//     const [carsToShow, setCarsToShow] = useState(8); // Изначально показываем 8 машин

//     const loadMoreCars = () => {
//         setCarsToShow(carsToShow + 8); // Увеличиваем количество машин на 12
//       };

//   return (
//     <div className='car-container'>
//       {cars.slice(0, carsToShow).map((car, index) => (
//         <CarCard key={index} car={car} />
//       ))}
//       {carsToShow < cars.length && (
//         <button className="load-more-button" onClick={loadMoreCars}>
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };

// export default CarContainer;
// import React, { useState } from 'react';
// import CarCard from './CarCard';
// import './CarContainer.css';

// const CarContainer = ({ cars }) => {
//   const [carsToShow, setCarsToShow] = useState(8);

//   const loadMoreCars = () => {
//     setCarsToShow(carsToShow + 8);
//   };

//   const carContainerStyles = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 274px)',
//     gridTemplateRows: 'repeat(3, 426px)',
//     gap: '16px',
//     width: '100%', // Чтобы контейнер растягивался на всю ширину
//     padding: '16px',
//   };

//   return (
//     <div className="car-container" style={carContainerStyles}>
//       {cars.slice(0, carsToShow).map((car, index) => (
//         <CarCard key={index} car={car} />
//       ))}
//       {carsToShow < cars.length && (
//         <button className="load-more-button" onClick={loadMoreCars}>
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };

// export default CarContainer;

import React, { useState } from 'react';
import CarCard from './CarCard';
import './CarContainer.css';
import FilterForm from './FilterForm';

const CarContainer = ({ cars, onFilter }) => {
  const [carsToShow, setCarsToShow] = useState(8);

  const loadMoreCars = () => {
    setCarsToShow(carsToShow + 8);
  };

  return (
    <div className='car-container'>
      {/* Передача onFilter до FilterForm */}
      <FilterForm onFilter={onFilter} />
      {cars.slice(0, carsToShow).map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      {carsToShow < cars.length && (
        <button className='load-more-button' onClick={loadMoreCars}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarContainer;
