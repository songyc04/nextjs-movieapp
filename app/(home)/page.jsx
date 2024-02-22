import Movie from "@components/movie.jsx";

import styles from "@styles/home.module.css";

export const metadata = {
  title: "Home"
}


export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("I'm fetching!");
  // fetch(API_URL).then(response => response.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Homepage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie 
          key={movie.id} 
          id={movie.id}   
          poster_path={movie.poster_path} 
          title={movie.title}
        />
      ))}
    </div>
  );
}