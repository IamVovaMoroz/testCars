
import React, { useState } from 'react';
import Select from 'react-select';
import './FilterForm.css'; // Импортируйте файл стилей

const FilterForm = ({ onFilter }) => {
  const carBrands = [
    'Buick',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Nissan',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const priceOptions = [
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    { value: 60, label: '60' },
    { value: 70, label: '70' },
    { value: 80, label: '80' },
    { value: 90, label: '90' },
    { value: 100, label: '100' },
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleBrandChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const handleMileageFromChange = e => {
    setMileageFrom(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleMileageToChange = e => {
    setMileageTo(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleFilterClick = () => {
    const filters = {
      brand: selectedBrand ? selectedBrand.value : null,
      price: null, // Устанавливаем price в null, чтобы игнорировать его выбор
      mileageFrom: mileageFrom,
      mileageTo: mileageTo,
    };
    onFilter(filters);
  };

  return (
    <div className='filter-form-container'>
      <div className='filter-input'>
        <label htmlFor='carBrand'>Car brand</label>
        <Select
          options={carBrands.map(brand => ({ value: brand, label: brand }))}
          defaultValue={{
            value: 'Enter the text',
            label: 'Enter the text',
          }}
          onChange={handleBrandChange}
        />
      </div>
      <div className='filter-input'>
        <label htmlFor='pricePerHour'>Price/ 1 hour</label>
        <div className='price-select'>
          <Select
            options={priceOptions}
            defaultValue={{ value: '', label: 'To $' }}
            isClearable={true}
          />
        </div>
      </div>
      <div className='filter-input'>
        <label htmlFor='carMileageFrom'>Car mileage / km</label>
        <div className='mileage-input'>
          <input
            type='text'
            id='carMileageFrom'
            name='carMileageFrom'
            placeholder='From'
            value={`From ${mileageFrom}`}
            onChange={handleMileageFromChange}
          />
          <input
            type='text'
            id='carMileageTo'
            name='carMileageTo'
            placeholder='To'
            value={`To ${mileageTo}`}
            onChange={handleMileageToChange}
          />
        </div>
      </div>
      <button className='search-button' onClick={handleFilterClick}>
        Search
      </button>
    </div>
  );
};

export default FilterForm;
