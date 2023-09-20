import React from 'react';

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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to our car catalog</h1>
      <p style={descriptionStyle}>
      Here you can find a wide selection of cars of different brands and classes.
         Whether you are looking for a car for travel or business
         meetings, we have the right option for you. Use filters to
         customize your search and find the perfect car for your needs.
      </p>
    </div>
  );
};

export default Home;
