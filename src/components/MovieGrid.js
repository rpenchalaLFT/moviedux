import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviewGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const onRatingChange = (e) => {
    setRating(e.target.value);
  };

  const filteredMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((m) => {
      return (
        m.genre.toLowerCase().includes(genre.toLowerCase()) ||
        genre === "All Genres"
      );
    })
    .filter((m) => {
      if (rating === "All") return true;
      if (rating === "Good") return m.rating >= 8;
      if (rating === "Ok") return m.rating < 8 && m.rating >= 5;
      return m.rating < 5;
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
      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            value={genre}
            onChange={onGenreChange}
            className="filter-dropdown"
          >
            <option value="All Genres">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Comedy</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="Rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={onRatingChange}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Bad">Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
