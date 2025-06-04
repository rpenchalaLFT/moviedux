import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviewGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = [
    {
      id: 1,
      title: "Dark Storm",
      image: "1.jpg",
      genre: "drama",
      rating: "8.3",
    },
    {
      id: 2,
      title: "Whisper of Fate",
      image: "2.jpg",
      genre: "fantasy",
      rating: "7.7",
    },
  ].filter((m) => {
    return m.title.toLowerCase().includes("d");
  });

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
