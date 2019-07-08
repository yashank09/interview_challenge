import React, { useState } from "react";
import "./Character.css";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import ShowImage from "./ShowImage";
import ShowMarks from "./ShowMarks";

export default function Character(props) {
  const character = props.data;
  const [isOpen, changeOpen] = useState(false);
  const [tagInput, setTagInput] = useState([]);

  // Getting Average of Character grades
  function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum = sum + parseInt(scores[i]);
    }
    return sum / scores.length;
  }

  function handleClick() {
    changeOpen(!isOpen);
  }

  function handleTagSubmit(e) {
    e.preventDefault();
    props.addTagValue(tagInput, character.id);
  }

  function handleTagInput(e) {
    setTagInput(e);
  }

  // Setting Grids for proper Views. Setting  classNames to Elements.
  return (
    <Grid container>
      <ShowImage pic={character.pic} />
      <Grid item xs={5}>
        <ShowInfo />
        {isOpen === true && (
          <React.Fragment>
            <ShowMarks grades={character.grades} />

            <form onSubmit={e => handleTagSubmit(e)}>
              <TextField
                value={tagInput}
                label="Add Tags"
                margin="dense"
                style={{
                  marginTop: "2px",
                  marginLeft: "18px"
                }}
                onChange={e => handleTagInput(e.target.value)}
              />
            </form>
          </React.Fragment>
        )}
      </Grid>
      <OpenButton />
    </Grid>
  );

  function ShowInfo() {
    return (
      <React.Fragment>
        <h1>
          {character.firstName} {character.lastName}
        </h1>
        <div className="char-info">
          <p>Email: {character.email}</p>
          <p>Company: {character.company}</p>
          <p>Skill: {character.skill}</p>
          <p>Average: {getAverage(character.grades)}%</p>
        </div>
        <div />
      </React.Fragment>
    );
  }

  function OpenButton() {
    return (
      <Grid item xs={2}>
        <button
          className="open-btn"
          onClick={() => handleClick(character.grades)}
        >
          Toggle Marks
        </button>
      </Grid>
    );
  }
}
