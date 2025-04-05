import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country, toggleFavorite, favorites }) => (
  <div className="country-wrapper">
    <Link to={`/country/${country.cca3}`} className="country-card">
      <img src={country.flags.svg} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </Link>
    <button
      className={`favorite-button ${favorites.includes(country.cca3) ? "active" : ""}`}
      onClick={() => toggleFavorite(country.cca3)}
    >
      {favorites.includes(country.cca3) ? "★" : "☆"}
    </button>
  </div>
);

export default CountryCard;