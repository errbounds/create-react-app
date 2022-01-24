import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, title, coverImg, summary, trailer, genres }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <p>{`youtube.com/watch?v=${trailer}`}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  trailer: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
