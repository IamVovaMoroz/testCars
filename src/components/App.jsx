
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import Favorites from './../pages/Favorites';
import CarCatalog from './CarCatalog';
import Navigation from './Navigation';

export const App = () => {
  const [favorites, setFavorites] = useState([]); // Состояние для списка избранных карточек

  const appStyles = {
    display: 'flex',
    backgroundColor: 'lightgray',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  // Функция для добавления карточки в избранное
  const addToFavorites = (car) => {
    if (!favorites.some((favorite) => favorite.id === car.id)) {
      setFavorites([...favorites, car]);
    }
  };

  // Функция для удаления карточки из избранного
  const removeFromFavorites = (car) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== car.id);
    setFavorites(updatedFavorites);
  };

  return (
    <BrowserRouter>
      <div className='App' style={appStyles}>
        <div className='app-container'>
          <Navigation />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/catalog'
              element={<CarCatalog addToFavorites={addToFavorites} />} // Передаем функцию добавления в избранное
            />
            <Route
              path='/favorites'
              element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} // Передаем список избранных и функцию удаления из избранного
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
