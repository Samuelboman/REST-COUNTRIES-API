import React from "react";
import CountryCard from "../components/CountryCard";

const Favorites = ({ countries, favorites, toggleFavorite }) => {
  const favoriteCountries = countries.filter(country =>
    favorites.includes(country.cca3)
  );

  return (
    <div className="favorites-page">
      <h2>⭐ Favorite Countries</h2>
      {favoriteCountries.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="countries-grid">
          {favoriteCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
