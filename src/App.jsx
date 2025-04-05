import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import CountryCard from "./components/CountryCard.jsx";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import "./App.scss";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const [region, setRegion] = useState("All");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (code) => {
    setFavorites((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="ring"></div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countries}
              search={search}
              setSearch={setSearch}
              theme={theme}
              setTheme={setTheme}
              region={region}
              setRegion={setRegion}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/country/:code" element={<CountryDetails countries={countries} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  );
};

export default App;
