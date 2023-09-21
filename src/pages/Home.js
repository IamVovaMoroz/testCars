import React from 'react';
import myImage from './../salon.jpg'; // Импорт изображения

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%', // Установите 100% для полного заполнения родительского контейнера
    maxWidth: '800px', // Максимальная ширина изображения
    height: 'auto', // Высота автоматически масштабируется, чтобы сохранить пропорции
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to our car catalog</h1>
      <p style={descriptionStyle}>
        Here you can find a wide selection of cars of different brands and classes.
        Whether you are looking for a car for travel or business
        meetings, we have the right option for you. Use filters to
        customize your search and find the perfect car for your needs.
      </p>
      <img src={myImage} alt="Car Catalog Cover" style={imageStyle} />
    </div>
  );
};

export default Home;
