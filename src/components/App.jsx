// import React from 'react';
// import jsonData from '../../src/data/cars2.json';
// // import Car from './CarCard'; // Импортируем компонент Car
// import CarContainer from './CarContainer'; // Импортируем компонент CarContainer

// export const App = () => {
//   return (
//     <div className="App">
//       <CarContainer cars={jsonData} /> {/* Передаем массив машин в CarContainer */}
//     </div>
//   );
// };

import React from 'react';
import jsonData from '../../src/data/cars.json';
import CarContainer from './CarContainer';
import FilterForm from './FilterForm';

export const App = () => {
  const appStyles = {
    display: 'flex', // Добавляем свойство display: flex
    backgroundColor: 'lightgray', // Цвет фона
    padding: '20px', // Отступы
    fontFamily: 'Arial, sans-serif', // Шрифт
  };

  return (
    <div className="App" style={appStyles}>
      <div className="app-container">
        <FilterForm/>
        <CarContainer cars={jsonData} />
      </div>
    </div>
  );
};





