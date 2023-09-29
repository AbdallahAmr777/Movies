import React from "react";
import {useMovieContext} from "./context/GlobalContext"
import * as actions from "./context/Action"
const MovieControls = ({ movie, type }) => {
    const MovieContext = useMovieContext()
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn"
          onClick={()=> MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHED,
            payload : movie
          })}>
            <i className="fa-solid fa-eye"></i>
          </button>
          <button className="ctrl-btn" 
          onClick={()=> MovieContext.MoviesDispatch({
            type :actions.REMOVE_MOVIE_FROM_WATCH_LIST,
            payload:movie.imdbID
          })}>
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn"
           onClick={()=> MovieContext.MoviesDispatch({
            type: actions.MOVE_TO_WATCH_LIST,
            payload : movie
          })}>
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn"  onClick={()=> MovieContext.MoviesDispatch({
            type: actions.REMOVE_FROM_WATCHED,
            payload : movie.imdbID
          })}>
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
