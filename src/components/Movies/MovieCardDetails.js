import * as React from "react";
import { Grid, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { blueGrey } from "@mui/material/colors";

export const MovieCardDetails = ({ movie }) => {
  return (
    <Grid
      item
      xs={12}
      component={motion.div}
      initial={{ height: 0 }}
      animate={{ height: "405px" }}
      transition={{ type: "spring", duration: 1, delay: 0 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          height: "390px",
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
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ paddingBottom: "calc(1.32821 * 100%)" }}>
            <CardMedia
              component="img"
              sx={{ flexBasis: "40%" }}
              image={movie.Poster}
              alt="Live from space album cover"
            />
          </div>
        </div>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              {movie.Title}
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <StyledBox>
                <Typography component="div" variant="div">
                  Year:
                </Typography>
                <Typography component="div" variant="div">
                  {movie.Year}
                </Typography>
              </StyledBox>
              <StyledBox>
                <Typography component="div" variant="div">
                  Running Time:
                </Typography>
                <Typography component="div" variant="div">
                  {movie.Runtime}
                </Typography>
              </StyledBox>
              <StyledBox>
                <Typography component="div" variant="div">
                  Directed by:
                </Typography>
                <Typography component="div" variant="div">
                  {movie.Title}
                </Typography>
              </StyledBox>
              <StyledBox>
                <Typography component="div" variant="div">
                  {movie.Title}
                </Typography>
                <Typography component="div" variant="div">
                  {movie.Title}
                </Typography>
              </StyledBox>
            </Stack>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
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

const StyledBox = styled("div")`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
