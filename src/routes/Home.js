import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await response.json();

      setMovieList(json.data.movies);
      setLoading(false);
    }
    getMovieList();
  }, []);

  // debug
  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  return (
    <div>
      <div>
        <h1>{loading ? `Loading...` : `Movie List (${movieList.length})`}</h1>
        <div>
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
              trailer={movie.yt_trailer_code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
