import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleOutsideClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscapeKey);
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close-button' onClick={onClose}>
          <div className='modal-close-icon'>X</div>
        </button>
        <div className='modal-content'>
          <img src={car.img} alt={car.make} className='modal-car-image' />
          <div className='modal-car-details'>
            <h2 className='modal-car-title'>{`${car.make}, ${car.year}`}</h2>
            <p className='modal-car-description'>{car.description}</p>
            <div className='modal-car-info-container'>
              <div className='modal-car-info'>
                <p>Kiev, Ukraine</p>
                <p>ID: {car.id}</p>
                <p>Year: {car.year}</p>
                <p>Type: {car.type}</p>
                <p>Fuel Consumption: {car.fuelConsumption}</p>
                <p>Engine Size: {car.engineSize}</p>
              </div>
            </div>
            <div className='modal-car-features'>
              <p>Accessories and functionalities:</p>
              {car.accessories.map((accessory, index) => (
                <span key={index}>{accessory}</span>
              ))}
            </div>
            <div className='modal-car-rental-conditions'>
              <p>Rental Conditions:</p>
              <p>Minimum age: 25</p>
              <p>Valid driver’s license</p>
              <p>Security deposit required</p>
            </div>
            <div className='modal-car-price'>
              <p>Mileage: {car.mileage}</p>
              <p>Price: {car.rentalPrice} per day</p>
            </div>
          </div>
          <div className='modal-button-container'>
            <a className="modal-button" href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
