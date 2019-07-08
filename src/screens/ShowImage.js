import React from "react";
import "./Character.css";
import { Grid } from "@material-ui/core";

export default function ShowImage(props) {
  return (
    <Grid item xs={5} className="image-container">
      <img src={props.pic} alt="Character Images" className="char-image" />
    </Grid>
  );
}
