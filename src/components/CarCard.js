
import Modal from './Modal';
import React, { useState } from 'react';
import './CarCard.css'; 

const CarCard = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const formattedPrice = car.rentalPrice.replace(' per day', '');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.img} alt={car.make} width="274px" height="268px" />
      </div>
      <div className="car-details">
        <h2>{`${car.make}, ${car.model} ${formattedPrice}`}</h2>
        <div className="car-info">
          <div className="car-info-item">
            {`${car.rentalCompany.split(' ')[0]}`} 
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
        {/* <div className="car-description">
          {car.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div> */}
        <div className="buttons-container">
          <button className="car-button" onClick={openModal}>
            Learn more
          </button>
          <button className={`favorite-button ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
            {isFavorite ? 'Remove' : 'Add '}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
    </div>
  );
};

export default CarCard;
