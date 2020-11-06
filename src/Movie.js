import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movies__data">
        <h3 class="movies__title">{title}</h3>
        <h5 class="movies__year">{year}</h5>
        <p class="movies__year">{summary}</p>
      </div>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;
