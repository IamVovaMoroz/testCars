// import React from 'react';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <select id="carBrand" name="carBrand" defaultValue="Enter the text" >
//         <option value="Enter the text" disabled hidden>Enter the text</option>
//           <option value="Buick">Buick</option>
//           <option value="HUMMER">HUMMER</option>
//           <option value="Subaru">Subaru</option>
//           <option value="Mitsubishi">Mitsubishi</option>
//           <option value="Nissan">Nissan</option>
//           <option value="Lincoln">Lincoln</option>
//           <option value="GMC">GMC</option>
//           <option value="Hyundai">Hyundai</option>
//           <option value="Bentley">Bentley</option>
//           <option value="Mercedes-Benz">Mercedes-Benz</option>
//           <option value="Aston Martin">Aston Martin</option>
//           <option value="Pontiac">Pontiac</option>
//           <option value="Nissan">Nissan</option>
//           <option value="Mercedes-Benz">Mercedes-Benz</option>
//           <option value="Chrysler">Chrysler</option>
//           <option value="Kia">Kia</option>
//           <option value="Land">Land</option>
//         </select>
//          </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <select id="pricePerHour" name="pricePerHour">
//           <option value="30">To 30$</option>
//           <option value="40">To 40$</option>
//           <option value="50">To 50$</option>
//           <option value="60">To 60$</option>
//           <option value="70">To 70$</option>
//           <option value="80">To 80$</option>
//           <option value="90">To 90$</option>
//           <option value="100">To 100$</option>
//         </select>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     'Buick',
//     'HUMMER',
//     'Subaru',
//     'Mitsubishi',
//     'Nissan',
//     'Lincoln',
//     'GMC',
//     'Hyundai',
//     'Bentley',
//     'Mercedes-Benz',
//     'Aston Martin',
//     'Pontiac',
//     'Nissan',
//     'Mercedes-Benz',
//     'Chrysler',
//     'Kia',
//     'Land',
//   ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '125px',
//     }),
//   };
//   const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <Select
//           options={priceOptions}
//           styles={priceSelectStyles}
//           value={selectedPrice}
//           onChange={handlePriceChange}
//           defaultValue={{
//             value: 30,
//             label: 'To $',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//     const carBrands = [
//         'Buick',
//         'HUMMER',
//         'Subaru',
//         'Mitsubishi',
//         'Nissan',
//         'Lincoln',
//         'GMC',
//         'Hyundai',
//         'Bentley',
//         'Mercedes-Benz',
//         'Aston Martin',
//         'Pontiac',
//         'Nissan',
//         'Mercedes-Benz',
//         'Chrysler',
//         'Kia',
//         'Land',
//       ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <Select
//           options={priceOptions}
//           styles={priceSelectStyles}
//           value={selectedPrice}
//           onChange={handlePriceChange}
//         />
//         <span className="price-label">{`To ${selectedPrice.label} $`}</span>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;
// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     // ... ваш массив carBrands
//   ];

//   const priceOptions = [
//     { value: 'To $', label: 'To $' },
//     { value: 'To 30 $', label: 'To 30 $' },
//     { value: 'To 40 $', label: 'To 40 $' },
//     { value: 'To 50 $', label: 'To 50 $' },
//     { value: 'To 60 $', label: 'To 60 $' },
//     { value: 'To 70 $', label: 'To 70 $' },
//     { value: 'To 80 $', label: 'To 80 $' },
//     { value: 'To 90 $', label: 'To 90 $' },
//     { value: 'To 100 $', label: 'To 100 $' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={selectedPrice}
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;


// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     // ... ваш массив carBrands
//   ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={{ value: selectedPrice, label: `To ${selectedPrice} $` }}
//             onChange={(option) => handlePriceChange(option.value)}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     // ... ваш массив carBrands
//   ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption ? selectedOption.value : null);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={
//               selectedPrice !== null
//                 ? { value: selectedPrice, label: `To ${selectedPrice} $` }
//                 : null
//             }
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     // ... ваш массив carBrands
//   ];

//   const priceOptions = [
//     { value: '', label: 'To $' }, // Начальное значение
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState('');

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption ? selectedOption.value : '');
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={priceOptions.find((option) => option.value === selectedPrice)}
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <input
//           type="text"
//           id="carMileageFrom"
//           name="carMileageFrom"
//           placeholder="From"
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageTo">To</label>
//         <input
//           type="text"
//           id="carMileageTo"
//           name="carMileageTo"
//           placeholder="To"
//         />
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//     const carBrands = [
//         'Buick',
//         'HUMMER',
//         'Subaru',
//         'Mitsubishi',
//         'Nissan',
//         'Lincoln',
//         'GMC',
//         'Hyundai',
//         'Bentley',
//         'Mercedes-Benz',
//         'Aston Martin',
//         'Pontiac',
//         'Nissan',
//         'Mercedes-Benz',
//         'Chrysler',
//         'Kia',
//         'Land',
//       ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const [mileageFrom, setMileageFrom] = useState(''); // Состояние для "From"
//   const [mileageTo, setMileageTo] = useState(''); // Состояние для "To"

//   // Обработчики событий для "From" и "To"
// const handleMileageFromChange = (e) => {
//     setMileageFrom(e.target.value);
//   };
  
//   const handleMileageToChange = (e) => {
//     setMileageTo(e.target.value);
//   };

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption ? selectedOption.value : null);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={
//               selectedPrice !== null
//                 ? { value: selectedPrice, label: `To ${selectedPrice} $` }
//                 : { value: 'To $', label: 'To $' } // Значение по умолчанию "To $"
//             }
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//   <label htmlFor="carMileageFrom">Car mileage / km</label>
//   <div className="mileage-input">
//     <input
//       type="text"
//       id="carMileageFrom"
//       name="carMileageFrom"
//       placeholder="From"
//       value={mileageFrom} // Связать значение с состоянием "mileageFrom"
//       onChange={handleMileageFromChange} // Добавить обработчик события
//     />
//     <input
//       type="text"
//       id="carMileageTo"
//       name="carMileageTo"
//       placeholder="To"
//       value={mileageTo} // Связать значение с состоянием "mileageTo"
//       onChange={handleMileageToChange} // Добавить обработчик события
//     />
//   </div>
// </div>

//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     'Buick',
//     'HUMMER',
//     'Subaru',
//     'Mitsubishi',
//     'Nissan',
//     'Lincoln',
//     'GMC',
//     'Hyundai',
//     'Bentley',
//     'Mercedes-Benz',
//     'Aston Martin',
//     'Pontiac',
//     'Nissan',
//     'Mercedes-Benz',
//     'Chrysler',
//     'Kia',
//     'Land',
//   ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const [mileageFrom, setMileageFrom] = useState(''); // Состояние для "From"
//   const [mileageTo, setMileageTo] = useState(''); // Состояние для "To"

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption ? selectedOption.value : null);
//   };

//   const handleMileageFromChange = (e) => {
//     setMileageFrom(e.target.value);
//   };

//   const handleMileageToChange = (e) => {
//     setMileageTo(e.target.value);
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={
//               selectedPrice !== null
//                 ? { value: selectedPrice, label: `To ${selectedPrice} $` }
//                 : { value: 'To $', label: 'To $' }
//             }
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Car mileage / km</label>
//         <div className="mileage-input">
//           <input
//             type="text"
//             id="carMileageFrom"
//             name="carMileageFrom"
//             placeholder="From"
//             value={mileageFrom}
//             onChange={handleMileageFromChange}
//           />
//           {mileageFrom !== '' && (
//             <span className="mileage-value">{`From ${mileageFrom}`}</span>
//           )}
//           <input
//             type="text"
//             id="carMileageTo"
//             name="carMileageTo"
//             placeholder="To"
//             value={mileageTo}
//             onChange={handleMileageToChange}
//           />
//           {mileageTo !== '' && (
//             <span className="mileage-value">{`To ${mileageTo}`}</span>
//           )}
//         </div>
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './FilterForm.css'; // Импортируйте файл стилей

// const FilterForm = () => {
//   const carBrands = [
//     'Buick',
//     'HUMMER',
//     'Subaru',
//     'Mitsubishi',
//     'Nissan',
//     'Lincoln',
//     'GMC',
//     'Hyundai',
//     'Bentley',
//     'Mercedes-Benz',
//     'Aston Martin',
//     'Pontiac',
//     'Nissan',
//     'Mercedes-Benz',
//     'Chrysler',
//     'Kia',
//     'Land',
//   ];

//   const priceOptions = [
//     { value: 30, label: '30' },
//     { value: 40, label: '40' },
//     { value: 50, label: '50' },
//     { value: 60, label: '60' },
//     { value: 70, label: '70' },
//     { value: 80, label: '80' },
//     { value: 90, label: '90' },
//     { value: 100, label: '100' },
//   ];

//   const brandSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '224px',
//     }),
//   };

//   const priceSelectStyles = {
//     control: (styles) => ({
//       ...styles,
//       width: '160px',
//     }),
//   };

//   const [selectedPrice, setSelectedPrice] = useState(null);

//   const [mileageFrom, setMileageFrom] = useState(''); // Состояние для "From"
//   const [mileageTo, setMileageTo] = useState(''); // Состояние для "To"

//   const handlePriceChange = (selectedOption) => {
//     setSelectedPrice(selectedOption ? selectedOption.value : null);
//   };

//   const handleMileageFromChange = (e) => {
//     setMileageFrom(e.target.value.replace(/[^0-9]/g, '')); // Убираем все символы, кроме цифр
//   };

//   const handleMileageToChange = (e) => {
//     setMileageTo(e.target.value.replace(/[^0-9]/g, '')); // Убираем все символы, кроме цифр
//   };

//   return (
//     <div className="filter-form-container">
//       <div className="filter-input">
//         <label htmlFor="carBrand">Car brand</label>
//         <Select
//           options={carBrands.map((brand) => ({ value: brand, label: brand }))}
//           styles={brandSelectStyles}
//           defaultValue={{
//             value: 'Enter the text',
//             label: 'Enter the text',
//           }}
//         />
//       </div>
//       <div className="filter-input">
//         <label htmlFor="pricePerHour">Price/ 1 hour</label>
//         <div className="price-select">
//           <Select
//             options={priceOptions}
//             styles={priceSelectStyles}
//             value={
//               selectedPrice !== null
//                 ? { value: selectedPrice, label: `To ${selectedPrice} $` }
//                 : { value: 'To $', label: 'To $' }
//             }
//             onChange={handlePriceChange}
//           />
//         </div>
//       </div>
//       <div className="filter-input">
//         <label htmlFor="carMileageFrom">Сar mileage / km</label>
//         <div className="mileage-input">
//           <input
//             type="text"
//             id="carMileageFrom"
//             name="carMileageFrom"
//             placeholder="From"
//             value={`From ${mileageFrom}`} // Отображаем "From" + значение
//             onChange={handleMileageFromChange}
//           />
//           <input
//             type="text"
//             id="carMileageTo"
//             name="carMileageTo"
//             placeholder="To"
//             value={`To ${mileageTo}`} // Отображаем "To" + значение
//             onChange={handleMileageToChange}
//           />
//         </div>
//       </div>
//       <button className="search-button">Search</button>
//     </div>
//   );
// };

// export default FilterForm;

import React, { useState } from 'react';
import Select from 'react-select';
import './FilterForm.css'; // Импортируйте файл стилей

const FilterForm = () => {
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

  const brandSelectStyles = {
    control: (styles) => ({
      ...styles,
      width: '224px',
    }),
  };

  const priceSelectStyles = {
    control: (styles) => ({
      ...styles,
      width: '160px',
    }),
    menu: (styles) => ({
      ...styles,
      maxHeight: '200px', // Максимальная высота меню
      overflowY: 'auto',   // Добавляем полосу прокрутки, если вариантов больше
    }),
  };

  const [selectedPrice, setSelectedPrice] = useState(null);

  const [mileageFrom, setMileageFrom] = useState(''); // Состояние для "From"
  const [mileageTo, setMileageTo] = useState(''); // Состояние для "To"

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption ? selectedOption.value : null);
  };

  const handleMileageFromChange = (e) => {
    setMileageFrom(e.target.value.replace(/[^0-9]/g, '')); // Убираем все символы, кроме цифр
  };

  const handleMileageToChange = (e) => {
    setMileageTo(e.target.value.replace(/[^0-9]/g, '')); // Убираем все символы, кроме цифр
  };

  return (
    <div className="filter-form-container">
      <div className="filter-input">
        <label htmlFor="carBrand">Car brand</label>
        <Select
          options={carBrands.map((brand) => ({ value: brand, label: brand }))}
          styles={brandSelectStyles}
          defaultValue={{
            value: 'Enter the text',
            label: 'Enter the text',
          }}
        />
      </div>
      <div className="filter-input">
        <label htmlFor="pricePerHour">Price/ 1 hour</label>
        <div className="price-select">
          <Select
            options={priceOptions}
            styles={priceSelectStyles}
            value={
              selectedPrice !== null
                ? { value: selectedPrice, label: `To ${selectedPrice} $` }
                : { value: 'To $', label: 'To $' }
            }
            onChange={handlePriceChange}
          />
        </div>
      </div>
      <div className="filter-input">
        <label htmlFor="carMileageFrom">Mileage</label>
        <div className="mileage-input">
          <input
            type="text"
            id="carMileageFrom"
            name="carMileageFrom"
            placeholder="From"
            value={`From ${mileageFrom}`} // Отображаем "From" + значение
            onChange={handleMileageFromChange}
          />
          <input
            type="text"
            id="carMileageTo"
            name="carMileageTo"
            placeholder="To"
            value={`To ${mileageTo}`} // Отображаем "To" + значение
            onChange={handleMileageToChange}
          />
        </div>
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default FilterForm;
