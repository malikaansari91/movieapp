import { Search } from "@mui/icons-material";
import { IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";

import { AppContext } from "../contexts";
import { MovieListWithDetails } from "../components/Movies";

import useWindowDimensions from "../customHooks/useWindowDimention";
import { getMovieTilePerRow, seperateArrayByLength } from "../utils/AppUtils";

export const Discover = () => {
  const { state, dispatch } = useContext(AppContext);
  const { width } = useWindowDimensions();
  const movieArr = seperateArrayByLength(
    state.movies,
    getMovieTilePerRow(width)
  );

  return (
    <Container>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Search />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>

      {movieArr.map((list, idx) => {
        return (
          <MovieListWithDetails
            selectedMovie={state.selectedMovie}
            dispatch={dispatch}
            movies={list}
            key={idx}
            showDetails={
              state.selectedMovie &&
              list?.some((el) => el.id === state.selectedMovie?.id)
            }
          />
        );
      })}
    </Container>
  );
};
