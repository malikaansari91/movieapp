import { Search } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  styled,
  Toolbar,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";

import { AppContext } from "../contexts";
import { MovieCard } from "../components/MovieCard";

export const Discover = () => {
  const theme = useTheme();
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

const LogoWrapper = styled("div")`
  text-align: center;
  margin-top: 6rem;
`;

const StyledLogo = styled("img")`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 15s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
