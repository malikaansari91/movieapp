import {
  AppBar,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";

import { AppContext } from "../contexts";
import { MovieListWithDetails } from "../components/Movies";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../customHooks/useWindowDimention";
import { getMovieTilePerRow, seperateArrayByLength } from "../utils/AppUtils";
import { motion } from "framer-motion";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { WbSunnyOutlined, MoreVertOutlined } from "@mui/icons-material";

export const Discover = () => {
  const theme = useTheme();
  const { state, dispatch } = useContext(AppContext);
  const { width } = useWindowDimensions();
  const movieArr = seperateArrayByLength(
    state.movies,
    getMovieTilePerRow(width)
  );
  console.log("movieArr", movieArr);
  const [showInput, setShowInput] = useState(false);

  const variants = {
    start: { width: "250px", background: theme.palette.background.paper },
    stop: { width: "50px" },
  };

  const searchMovies = (e) => {
    const keyword = e.target.value;

    dispatch({ type: "SEARCH_MOVIES", payload: keyword });
  };

  const topbar = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "transparent", boxShadow: "none", marginBottom: 3 }}
        position="static"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() =>
                dispatch({ type: "TOGGLE_SIDEBAR", payload: true })
              }
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Search
              variants={variants}
              animate={showInput ? "start" : "stop"}
              transition={{ type: "spring", duration: 1 }}
              onClick={() => setShowInput(true)}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Title, Movies, Keyword"
                inputProps={{ "aria-label": "search" }}
                onChange={searchMovies}
              />
            </Search>
          </Stack>

          <Stack direction="row" spacing={2}>
            <WbSunnyOutlined />
            <MoreVertOutlined />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );

  return (
    <Container
      sx={{
        paddingleft: { sm: 0 },
      }}
    >
      {topbar}

      {state.movies.length === 0 ? (
        <Typography variant="h6" component="div">
          No results found for your search
        </Typography>
      ) : null}

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

const Search = styled(motion.div)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  height: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
