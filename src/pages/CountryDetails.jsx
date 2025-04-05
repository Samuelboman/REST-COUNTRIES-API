import React from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const country = countries.find(c => c.cca3 === code);

  if (!country) return <p>Country not found.</p>;

  return (
    <div className="details">
      <Link to="/" className="back-button">← Back</Link>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={country.name.common} />
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetails;