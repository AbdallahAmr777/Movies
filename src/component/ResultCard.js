import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/Action";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storeMovieWatchList = MovieContext.watchList.find(
    (D) => D.imdbID === movie.imdbID
  );
  const storeMovieWatched = MovieContext.watched.find(
    (D) => D.imdbID === movie.imdbID
  );
  const WatchListDisabled = storeMovieWatchList
    ? true
    : storeMovieWatched
    ? true
    : false;
  const WatchedDisabled = storeMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="head">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            disabled={WatchListDisabled}
            className="btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCH_LIST,
                payload: movie,
              })
            }
          >
            Add to WatchList{" "}
          </button>
          <button
            disabled={WatchedDisabled}
            className="btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            Add to Watched{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
