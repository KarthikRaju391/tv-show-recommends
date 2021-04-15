import { useState } from "react";
import "./styles.css";

const series = {
  Comedy: [
    { name: "the Office", rating: "8.5/10" },
    { name: "Friends", rating: "9.5/10" },
    { name: "Brooklyn nine nine", rating: "9/10" }
  ],
  Drama: [
    { name: "Suits", rating: "9/10" },
    { name: "Prison break", rating: "9.5/10" },
    { name: "Breaking bad", rating: "9.5/10" }
  ],
  SciFi: [
    { name: "Dark", rating: "9/10" },
    { name: "Stranger things", rating: "9/10" },
    { name: "Upload", rating: "8.5/10" }
  ]
};

export default function App() {
  let showsIKnow = Object.keys(series);

  const [selectedGenre, setGenre] = useState("Comedy");

  function genreClickHandler(genres) {
    setGenre(genres);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="action">
          🎬
        </span>{" "}
        bingeable
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite series. Select a genre to get started{" "}
      </p>
      <div className="buttons">
        {showsIKnow.map((genres) => (
          <button
            key={genres}
            onClick={() => genreClickHandler(genres)}
            style={{
              cursor: "pointer",
              backgroundColor: "#1F2937",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genres}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {series[selectedGenre].map((show) => (
            <li
              key={show.name}
              style={{
                listStyleType: "none",
                border: "1px solid black",
                backgroundColor: "#1F2937",
                color: "white",
                padding: "1rem",
                margin: "1rem 0rem",
                borderRadius: "8px",
                width: "70%"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{show.name}</div>
              <div style={{ fontSize: "smaller" }}>{show.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
