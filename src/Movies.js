



// import React from "react";
// import Movies from "Movies.css"
// function Movies({ movie, liked, disliked, handleLike, handleDislike, showActions }) {
//   return (
//     <div style={{ border: "1px solid #aaa", padding: "1rem", marginBottom: "1rem" }}>
//       <h3>{movie.title}</h3>
//       <img src={movie.image} alt={movie.title} width="200" />
//       <p>{movie.description}</p>
//       <p>⭐ Rating: {movie.rating}</p>

//       {showActions && (
//         <>
//           <button onClick={handleLike}>Like</button>{" "}
//           <button onClick={handleDislike}>Dislike</button>
//           <div>
//             {liked && <span>✅ Liked</span>}
//             {disliked && <span>❌ Disliked</span>}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Movies;

import React from "react";
import "./Movies.css"; // ✅ Import the CSS

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
            <button onClick={handleLike} className="like-button">Like</button>
            <button onClick={handleDislike} className="dislike-button">Dislike</button>
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
