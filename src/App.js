








import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Movies from "./Movies";

const defaultMovies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    rating: 8.8,
    img: 'https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind.',
    rating: 9.0,
    img: 'https://m.media-amazon.com/images/I/51k0qaN5S5L._AC_.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'Explorers travel through a wormhole in space.',
    rating: 8.6,
    img: 'https://m.media-amazon.com/images/I/71n3wWJqAbL._AC_SL1181_.jpg',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    description: 'The Avengers assemble to undo the damage caused by Thanos.',
    rating: 8.4,
    img: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
  },
  {
    id: 5,
    title: 'Titanic',
    description: 'A love story unfolds aboard the doomed Titanic.',
    rating: 7.8,
    img: 'https://m.media-amazon.com/images/I/51rggtPgmRL._AC_.jpg',
  },
  {
    id: 6,
    title: 'Forrest Gump',
    description: 'Life story of Forrest Gump, a man with a low IQ but good intentions.',
    rating: 8.8,
    img: 'https://m.media-amazon.com/images/I/61+tw0rRlUL._AC_SY679_.jpg',
  },
  {
    id: 7,
    title: 'The Matrix',
    description: 'A hacker discovers reality is a simulation.',
    rating: 8.7,
    img: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg',
  },
  {
    id: 8,
    title: 'Gladiator',
    description: 'A former Roman General sets out to exact vengeance.',
    rating: 8.5,
    img: 'https://m.media-amazon.com/images/I/51A9RwTTVrL._AC_.jpg',
  },
  {
    id: 9,
    title: 'Jurassic Park',
    description: 'Dinosaurs are brought back to life in a theme park.',
    rating: 8.1,
    img: 'https://m.media-amazon.com/images/I/51b5E0RNVrL._AC_.jpg',
  },
  {
    id: 10,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over several years.',
    rating: 9.3,
    img: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
  },
];

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState("all");

  // Load current user
  useEffect(() => {
    const currentUsername = localStorage.getItem("currentUsername");
    if (currentUsername) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || {};
      const currentUser = allUsers[currentUsername];

      if (currentUser) {
        // Ensure liked/disliked arrays exist
        if (!currentUser.liked) currentUser.liked = [];
        if (!currentUser.disliked) currentUser.disliked = [];
        setUser(currentUser);
        setIsLogin(true);
      }
    }
  }, []);

  // Save updated user info
  useEffect(() => {
    if (user) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || {};
      allUsers[user.username] = user;
      localStorage.setItem("users", JSON.stringify(allUsers));
      localStorage.setItem("currentUsername", user.username);
    }
  }, [user]);

  const handleLike = (id) => {
    const isLiked = user.liked.includes(id);
    setUser({
      ...user,
      liked: isLiked ? user.liked.filter((mid) => mid !== id) : [...user.liked, id],
      disliked: user.disliked.filter((mid) => mid !== id),
    });
  };

  const handleDislike = (id) => {
    const isDisliked = user.disliked.includes(id);
    setUser({
      ...user,
      disliked: isDisliked ? user.disliked.filter((mid) => mid !== id) : [...user.disliked, id],
      liked: user.liked.filter((mid) => mid !== id),
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUsername");
    setIsLogin(false);
    setIsSignup(false);
    setFilter("all");
  };

  const likedMovies = user?.liked || [];
  const dislikedMovies = user?.disliked || [];

  const filteredMovies =
    filter === "liked"
      ? defaultMovies.filter((movie) => likedMovies.includes(movie.id))
      : filter === "disliked"
      ? defaultMovies.filter((movie) => dislikedMovies.includes(movie.id))
      : defaultMovies;

  if (!isLogin) {
    return isSignup ? (
      <Signup setUser={setUser} setIsLogin={setIsLogin} setIsSignup={setIsSignup} />
    ) : (
      <Login setUser={setUser} setIsLogin={setIsLogin} setIsSignup={setIsSignup} />
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome, {user.username}</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFilter("liked")} style={btnStyle}>Liked</button>{" "}
        <button onClick={() => setFilter("disliked")} style={btnStyle}>Disliked</button>{" "}
        <button onClick={() => setFilter("all")} style={btnStyle}>All</button>{" "}
        <button onClick={logout} style={{ ...btnStyle, backgroundColor: "#e74c3c" }}>Logout</button>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem"
      }}>
        {filteredMovies.length === 0 ? (
          <p>No movies to show.</p>
        ) : (
          filteredMovies.map((movie) => (
            <Movies
              key={movie.id}
              movie={movie}
              liked={likedMovies.includes(movie.id)}
              disliked={dislikedMovies.includes(movie.id)}
              handleLike={() => handleLike(movie.id)}
              handleDislike={() => handleDislike(movie.id)}
              showActions={filter === "all"}
            />
          ))
        )}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "8px 16px",
  margin: "0 4px 8px 0",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#3498db",
  color: "white",
  cursor: "pointer"
};

export default App;

