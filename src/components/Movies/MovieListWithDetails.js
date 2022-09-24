import * as React from "react";
import { Grid } from "@mui/material";
import { MovieCard, MovieCardDetails } from ".";

export const MovieListWithDetails = ({
  movies,
  selectedMovie,
  dispatch,
  showDetails,
}) => {
  const handleMovieClick = (payload) => {
    dispatch({ type: "SET_SELECTED_MOVIE", payload });
  };
  return (
    <Grid container spacing={3}>
      {showDetails && <MovieCardDetails movie={selectedMovie} />}
      {movies.map((movie, idx) => {
        return <MovieCard key={idx} movie={movie} onClick={handleMovieClick} />;
      })}
    </Grid>
  );
};
