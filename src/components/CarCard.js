
// import React, { useState } from 'react';
// import './CarCard.css';
// import Modal from './Modal'; 

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
//         <button className="car-button" onClick={openModal}>Learn more</button> 
//         <Modal isOpen={isModalOpen} onClose={closeModal}  car={car} />
//       </div>
//     </div>
//   );
// };

// export default CarCard;



// import React, { useState } from 'react';
// import './CarCard.css'; 
// import Modal from './Modal'; 

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
//         <button className="car-button" onClick={openModal}>
//           Learn more
//           <span>▶</span> {/* Символ "▶" для кнопки */}
//         </button>
//         <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
//       </div>
//     </div>
//   );
// };

// export default CarCard;

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
//         <img src={car.photoLink} alt={car.make} width="274px" height="268px" />
//       </div>
//       <div className="car-details">
//         <h2>{`${car.make}, ${car.model}`}</h2>
//         <p className="car-price">{car.rentalPrice} per day</p>
//         <div className="car-info">
//           <div className="car-location">
//             {`${car.address}, ${car.rentalCompany}`}
//           </div>
//           <div className="car-type">
//             {`${car.type}, ${car.id}`}
//           </div>
//           <div className="car-features">
//             {car.accessories.map((accessory, index) => (
//               <span key={index} className="car-feature">
//                 {accessory}
//               </span>
//             ))}
//           </div>
//           <div className="car-description">{car.description}</div>
//           <button className="car-button" onClick={openModal}>
//             Learn more
//             <span>▶</span>
//           </button>
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
//     </div>
//   );
// };

// export default CarCard;





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

//   const formattedPrice = car.rentalPrice.replace(' per day', ''); // Убираем "per day" из цены

//   return (
//     <div className="car-card">
//       <div className="car-image">
//         <img src={car.img} alt={car.make} width="274px" height="268px" />
//       </div>
//       <div className="car-details">
//         <h2>{`${car.make}, ${car.model} ${formattedPrice}`}</h2>
//         <div className="car-info">
//           <div className="car-location">
//             {`${car.rentalCompany.split(' ')[0]}`} {/* Выводим первое слово из rentalCompany */}
//           </div>
//           <div className="car-location">
//             {`${car.type}`}
//           </div>
//           <div className="car-location">
//             {`${car.id}`}
//           </div>
//           <div className="car-location">
//             {`${car.functionalities.join(', ')}`}
//           </div>
//           <button className="car-button" onClick={openModal}>
//             Learn more
//             <span>▶</span>
//           </button>
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
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

  const formattedPrice = car.rentalPrice.replace(' per day', ''); // Убираем "per day" из цены

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.img} alt={car.make} width="274px" height="268px" />
      </div>
      <div className="car-details">
        <h2>{`${car.make}, ${car.model} ${formattedPrice}`}</h2>
        <div className="car-info">
          <div className="car-info-item">
            {`${car.rentalCompany.split(' ')[0]}`} {/* Выводим первое слово из rentalCompany */}
          </div>
          <div className="car-info-item">
            {`${car.type}`}
          </div>
          <div className="car-info-item">
            {`${car.id}`}
          </div>
          <div className="car-info-item">
            {`${car.functionalities.join(', ')}`}
          </div>
        </div>
        <div className="car-description">
          {car.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <button className="car-button" onClick={openModal}>
          Learn more
          <span>▶</span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
    </div>
  );
};

export default CarCard;
