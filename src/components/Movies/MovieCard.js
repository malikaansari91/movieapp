import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea onClick={() => onClick(movie)}>
          <CardMedia
            component="img"
            height="160"
            image={movie.Poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
