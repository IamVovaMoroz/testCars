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

// import React from 'react';
// import jsonData from '../../src/data/cars2.json';
// import CarContainer from './CarContainer';
// import FilterForm from './FilterForm';

// export const App = () => {
//   const appStyles = {
//     display: 'flex', // Добавляем свойство display: flex
//     backgroundColor: 'lightgray', // Цвет фона
//     padding: '20px', // Отступы
//     fontFamily: 'Arial, sans-serif', // Шрифт
//   };
  

//   return (
//     <div className="App" style={appStyles}>
//       <div className="app-container">
//         <FilterForm/>
//         <CarContainer cars={jsonData} />
//       </div>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import jsonData from '../../src/data/cars2.json';
// import CarContainer from './CarContainer';
// import FilterForm from './FilterForm';
// import Home from './../pages/Home';
// import Favorites from './../pages/Favorites';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Важливо використовувати Routes

// export const App = () => {
//   const appStyles = {
//     display: 'flex',
//     backgroundColor: 'lightgray',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const [filterData, setFilterData] = useState({
//     brand: null,
//     price: null,
//     mileageFrom: '',
//     mileageTo: '',
//   });

//   const [filteredCars, setFilteredCars] = useState(jsonData);

//   useEffect(() => {
//     // Функція для фільтрації даних
//     const filterCars = () => {
//       const filtered = jsonData.filter((car) => {
//         if (
//           (filterData.brand && car.make !== filterData.brand) ||
//           (filterData.price && car.pricePerHour > filterData.price) ||
//           (filterData.mileageFrom &&
//             car.mileage < parseInt(filterData.mileageFrom)) ||
//           (filterData.mileageTo &&
//             car.mileage > parseInt(filterData.mileageTo))
//         ) {
//           return false;
//         }
//         return true;
//       });

//       setFilteredCars(filtered);
//     };

//     filterCars();
//   }, [filterData]);

//   const handleFilterChange = (filters) => {
//     setFilterData(filters);
//   };

//   return (
//     <Router>
//       <div className="App" style={appStyles}>
//         <div className="app-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/catalog" element={<CarContainer cars={filteredCars} />} />
//             <Route path="/favorites" element={<Favorites />} />
        
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import Favorites from './../pages/Favorites';
import CarCatalog from './CarCatalog'; // Імпортуємо новий компонент
import Navigation from './Navigation';

export const App = () => {
  const appStyles = {
    display: 'flex',
    backgroundColor: 'lightgray',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <Router>
      <div className='App' style={appStyles}>
        <div className='app-container'>
        <Navigation /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<CarCatalog />} /> {/* Змінено на CarCatalog */}
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


