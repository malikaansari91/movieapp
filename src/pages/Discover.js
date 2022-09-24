import { Search } from "@mui/icons-material";
import { IconButton, Toolbar, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";

import { AppContext } from "../contexts";
import { MovieCard } from "../components/MovieCard";

export const Discover = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state, dispatch);
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

      <Grid container spacing={3}>
        {state.movies.map((movie, idx) => {
          return <MovieCard key={idx} movie={movie} />;
        })}
      </Grid>
    </Container>
  );
};
