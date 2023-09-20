import React from 'react';

const Favorites = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    padding: '20px', 
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Favorite Listings</h1>
    
    </div>
  );
};

export default Favorites;
