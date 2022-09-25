import * as React from "react";
import {
  Grid,
  Button,
  Stack,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { blueGrey } from "@mui/material/colors";

export const MovieCardDetails = ({ movie }) => {
  const ratings = parseFloat(movie.imdbRating) * 10;
  return (
    <Grid
      item
      xs={12}
      component={motion.div}
      initial={{ height: 0 }}
      animate={{ height: "425px" }}
      transition={{ type: "spring", duration: 1, delay: 0 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          height: "410px",
          background: blueGrey[800],
          padding: 1,
        }}
        component={motion.div}
        initial={{ visibility: "hidden", transform: "scaleY(0)" }}
        animate={{
          visibility: "visible",
          transform: "scaleY(1)",
        }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: "215px", sm: "100%" },
            overflow: "hidden",
            width: { xs: "100%", sm: "300px" },
          }}
        >
          <Box sx={{ paddingBottom: { xs: "150%", sm: "170%" } }}>
            <CardMedia
              component="img"
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "auto",
                display: "inline-block",
                transform: "translateZ(0)",
              }}
              image={movie.Poster}
              alt="green iguana"
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Stack direction="column" spacing={1}>
              <Typography
                component="div"
                sx={{ typography: { sm: "h5", xs: "body1" } }}
              >
                {movie.Title}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <BorderLinearProgress
                  variant="determinate"
                  value={isNaN(ratings) ? 0 : ratings}
                />
                <Typography sx={{ typography: { sm: "div", xs: "body2" } }}>
                  {movie.imdbRating}/10
                </Typography>
              </Stack>

              <Stack direction="column" spacing={0.5}>
                <StyledBox>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body1" } }}
                  >
                    Year:
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    {movie.Year}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    Running Time:
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    {movie.Runtime}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    Directed by:
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    {movie.Title}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    Language:
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ typography: { sm: "div", xs: "body2" } }}
                  >
                    {movie.Title}
                  </Typography>
                </StyledBox>
              </Stack>
              <Typography
                variant="subtitle1"
                gutterBottom
                paragraph
                sx={{ typography: { sm: "subtitle1", xs: "body2" } }}
              >
                {movie.Plot}
              </Typography>
            </Stack>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Play Movie</Button>
              <Button variant="outlined">Watch Trailer</Button>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  width: "50%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.background.paper,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const StyledBox = styled("div")`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
