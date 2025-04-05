import React, { useState } from "react";
import CountryCard from "../components/CountryCard";
import Pagination from "../components/Pagination";


const Home = ({ countries, search, setSearch, theme, setTheme, region, setRegion, favorites, toggleFavorite }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "All" || country.region === region;
    return matchesSearch && matchesRegion;
  });

  const sortedCountries = [...filteredCountries].sort((a, b) => a.name.common.localeCompare(b.name.common));
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>REST Countries API</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-toggle"
        >
          {theme === "light" ? "🌞 Light Theme" : "🌙 Dark Theme"}
        </button>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="countries-grid">
        {currentCountries.map((country) => (
          <CountryCard
            country={country}
            key={country.cca3}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>

      <Pagination 
        totalPages={totalPages}
        currentPages={currentPage}
        setCurrentPage={setCurrentPage}
      />

      
    </div>
  );
};

export default Home;