
import React from "react";
import "./Movies.css";

function Movies({ movie, liked, disliked, handleLike, handleDislike, showActions }) {
  return (
    <div className="movie-card">
      <h3 className="movie-title">{movie.title}</h3>
      <img className="movie-image" src={movie.image} alt={movie.title} />
      <p className="movie-description">{movie.description}</p>
      <p className="movie-rating">⭐ Rating: {movie.rating}</p>

      {showActions && (
        <>
          <div className="button-group">
            <button
              onClick={handleLike}
              className="like-button"
              disabled={liked || disliked} // disable if already liked or disliked
            >
              Like
            </button>
            <button
              onClick={handleDislike}
              className="dislike-button"
              disabled={liked || disliked} // disable if already liked or disliked
            >
              Dislike
            </button>
          </div>
          <div className="action-status">
            {liked && <span className="liked-label">✅ Liked</span>}
            {disliked && <span className="disliked-label">❌ Disliked</span>}
          </div>
        </>
      )}
    </div>
  );
}

export default Movies;
