import * as React from "react";
import { Grid, Box, IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { AddCircleOutline, PlayCircleOutline } from "@mui/icons-material";

import { blueGrey } from "@mui/material/colors";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
      <Card
        sx={{ flex: 1, background: blueGrey[800], padding: 1, marginBottom: 2 }}
      >
        <CardActionArea onClick={() => onClick(movie)}>
          <Box
            sx={{
              position: "relative",
              height: { xs: "215px", sm: "300px" },
              overflow: "hidden",
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
          <CardContent>
            <Typography gutterBottom component="div">
              {movie.Title}
            </Typography>
            <Stack direction="row" spacing={0.1}>
              <IconButton color="inherit" size="medium" edge="start">
                <PlayCircleOutline />
              </IconButton>
              <IconButton color="inherit" size="medium" edge="start">
                <AddCircleOutline />
              </IconButton>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
