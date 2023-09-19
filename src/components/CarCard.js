// // import React from 'react';
// import React, { useState } from 'react';
// import './CarCard.css'; // Импортируем файл стилей
// import Modal from './Modal'; // Импортируем компонент Modal

// const CarCard = ({ car }) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className="car-card">
//       <div className="car-image">
//         <img src={car.img} alt={car.make} width="274px" height="268px" />
//       </div>
//       <div className="car-details">
//         <h2>{`${car.make}, ${car.year}`}</h2>
//         <p className="car-price">{car.rentalPrice} per day</p>
//         <div className="car-location">
//           {`${car.address}, ${car.rentalCompany}`}
//           <span>|</span>
//           {`${car.type}, ${car.model}, ${car.id}`}
//         </div>
//         <div className="car-features">
//           {car.accessories.map((accessory, index) => (
//             <span key={index} className="car-feature">
//               {accessory}
//             </span>
//           ))}
//         </div>
//         <div className="car-description">{car.description}</div>
//         <button className="car-button" onClick={openModal}>Learn more</button> {/* Добавляем кнопку */}
//         <Modal isOpen={isModalOpen} onClose={closeModal}  car={car} />
//       </div>
//     </div>
//   );
// };

// export default CarCard;
import React, { useState } from 'react';
import './CarCard.css'; // Импортируем файл стилей
import Modal from './Modal'; // Импортируем компонент Modal

const CarCard = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.img} alt={car.make} width="274px" height="268px" />
      </div>
      <div className="car-details">
        <h2>{`${car.make}, ${car.year}`}</h2>
        <p className="car-price">{car.rentalPrice} per day</p>
        <div className="car-location">
          {`${car.address}, ${car.rentalCompany}`}
          <span>|</span>
          {`${car.type}, ${car.model}, ${car.id}`}
        </div>
        <div className="car-features">
          {car.accessories.map((accessory, index) => (
            <span key={index} className="car-feature">
              {accessory}
            </span>
          ))}
        </div>
        <div className="car-description">{car.description}</div>
        <button className="car-button" onClick={openModal}>
          Learn more
          <span>▶</span> {/* Символ "▶" для кнопки */}
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
      </div>
    </div>
  );
};

export default CarCard;
