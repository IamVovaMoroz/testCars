import React, { useState, useEffect } from 'react';
import jsonData from '../../src/data/cars2.json';
import CarContainer from './CarContainer';
// import FilterForm from './FilterForm';

const CarCatalog = () => {
  const [filterData, setFilterData] = useState({
    brand: null,
    price: null,
    mileageFrom: '',
    mileageTo: '',
  });

  const [filteredCars, setFilteredCars] = useState(jsonData);

  useEffect(() => {
    // Функція для фільтрації даних
    const filterCars = () => {
      const filtered = jsonData.filter((car) => {
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
