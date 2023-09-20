// import React, { useEffect } from 'react';

// const DataFilter = ({ data, filters, onDataFiltered }) => {
//   useEffect(() => {
//     // Функция для фильтрации данных
//     const filtered = data.filter((car) => {
//       // Преобразуем стоимость аренды из строки в число и удаляем знак доллара
//       const rentalPriceValue = parseFloat(car.rentalPrice.replace('$', ''));
      
//       console.log(car);
//       console.log(filters);
//       console.log( rentalPriceValue);
      
//       if (
//         (filters.brand && car.make !== filters.brand) ||
//         (filters.price && rentalPriceValue > filters.price) || // Сравниваем числовое значение
//         (filters.mileageFrom && car.mileage < parseInt(filters.mileageFrom)) ||
//         (filters.mileageTo && car.mileage > parseInt(filters.mileageTo))
//       ) {
//         return false;
//       }
//       return true;
//     });

//     console.log('Filtered:', filtered);

//     onDataFiltered(filtered);
//   }, [data, filters, onDataFiltered]);

//   return null;
// };

// export default DataFilter;

import React, { useEffect } from 'react';

const DataFilter = ({ data, filters, onDataFiltered }) => {
  useEffect(() => {
    // Функция для фильтрации данных
    const filtered = data.filter((car) => {
      // Преобразуем стоимость аренды из строки в число и удаляем знак доллара
      const rentalPriceValue = parseFloat(car.rentalPrice.replace('$', ''));

      console.log(car);
      console.log(filters);
      console.log(rentalPriceValue);

      if (
        (filters.brand && car.make !== filters.brand) ||
        (filters.price && rentalPriceValue > filters.price) || // Сравниваем числовое значение
        (filters.mileageFrom && car.mileage < parseInt(filters.mileageFrom)) ||
        (filters.mileageTo && car.mileage > parseInt(filters.mileageTo))
      ) {
        return false;
      }
      return true;
    });

    console.log('Filtered:', filtered);

    onDataFiltered(filtered);
  }, [data, filters, onDataFiltered]);

  return null;
};

export default DataFilter;
