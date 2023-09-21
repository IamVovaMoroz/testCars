// import React, { useState, useEffect } from 'react';
// import jsonData from '../../src/data/cars2.json';
// import CarContainer from './CarContainer';
// // import FilterForm from './FilterForm';

// const CarCatalog = () => {
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
//     <div>
    
//       <CarContainer cars={filteredCars} onFilter={handleFilterChange} />

//     </div>
//   );
// };

// export default CarCatalog;

import React, { useState, useEffect } from 'react';
import CarContainer from './CarContainer';
const CarCatalog = () => {
  const [filterData, setFilterData] = useState({
    brand: null,
    price: null,
    mileageFrom: '',
    mileageTo: '',
  });

  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    // Функция для фильтрации данных
    const filterCars = async () => {
      try {
        const response = await fetch("https://650b33cedfd73d1fab09c43c.mockapi.io/cars");
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const carData = await response.json();

        const filtered = carData.filter((car) => {
          if (
            (filterData.brand && car.make !== filterData.brand) ||
            (filterData.price && car.pricePerHour > filterData.price) ||
            (filterData.mileageFrom &&
              car.mileage < parseInt(filterData.mileageFrom)) ||
            (filterData.mileageTo &&
              car.mileage > parseInt(filterData.mileageTo))
          ) {
            return false;
          }
          return true;
        });

        setFilteredCars(filtered);
      } catch (error) {
        console.error(error);
        setFilteredCars([]); // В случае ошибки установите пустой массив
      }
    };

    filterCars();
  }, [filterData]);

  const handleFilterChange = (filters) => {
    setFilterData(filters);
  };

  return (
    <div>
      <CarContainer cars={filteredCars} onFilter={handleFilterChange} />
    </div>
  );
};

export default CarCatalog;
