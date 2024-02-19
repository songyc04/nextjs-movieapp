import { API_URL } from "@app/(home)/page.jsx";

async function getMovie(id) {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}


export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  // console.log(id);
  return (
    <h5>{JSON.stringify(movie)}</h5>
  );
}