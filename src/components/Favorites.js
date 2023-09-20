import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h1>Favorite Ads</h1>
      <div className="favorites-container">
        {favorites.map((car) => (
          <div key={car.id} className="favorite-card">
            
            <img src={car.img} alt={car.make} />
            <h2>{`${car.make}, ${car.model}`}</h2>
            <p>{car.description}</p>
            <button onClick={() => removeFromFavorites(car)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
