import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import Character from "../screens/Character";

export default function CharacterList(props) {
  // Using Hooks to set Data after Filter; set Query after Input.
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [tagQuery, setTagQuery] = useState([]);

  // Handle Query. Reset Data if Query = 0. Set State if filter matches.
  function handleSearch(query) {
    setSearchQuery(query.toLowerCase());
    if (query.length === 0) {
      return setFilteredData([]);
    }
    let newData = props.list.filter(
      char =>
        char.firstName.toLowerCase().includes(searchQuery) === true ||
        char.lastName.toLowerCase().includes(searchQuery) === true
    );
    return setFilteredData(newData);
  }

  // Handle Tag Search.
  function handleTagSearch(query) {
    setTagQuery(query.toLowerCase());
    if (query.length === 0) {
      return setFilteredData([]);
    }
    let newData = props.list.filter(
      char =>
        // TODO
        char.firstName.toLowerCase().includes(tagQuery) === true
    );
    return setFilteredData(newData);
  }

  // Add Tag to Character TODO
  function addTagValue(tag, id) {
    console.log(tag, id);
    props.push(tag);
  }

  // Show Search Input.
  // Show Tag Search Input.
  // Show Data by Mapping Characters. Use Filtered or Props. Will look how to improve.
  return (
    <div style={styles.container}>
      <TextField
        value={searchQuery}
        label="Search Character"
        margin="dense"
        style={{
          position: "fixed",
          marginTop: "8px",
          marginLeft: "18px"
        }}
        onChange={e => handleSearch(e.target.value)}
      />

      <TextField
        value={tagQuery}
        label="Search Tags"
        margin="dense"
        style={{
          position: "fixed",
          marginTop: "80px",
          marginLeft: "18px"
        }}
        onChange={e => handleTagSearch(e.target.value)}
      />

      {filteredData.length === 0
        ? props.list.map((character, index) => (
            <div key={index} style={{ paddingTop: "32px" }}>
              <Character data={character} addTagValue={addTagValue} />
            </div>
          ))
        : filteredData.map((character, index) => (
            <div key={index} style={{ paddingTop: "32px" }}>
              <Character data={character} addTagValue={addTagValue} />
            </div>
          ))}
    </div>
  );
}

// Containing the outer Div and adding Shadows
const styles = {
  container: {
    boxShadow: "0 1px 3px 1px rgba(0,0,0,0.28), 0 2px 2px 1px rgba(0,0,0,0.34)",
    marginTop: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    overflowY: "auto",
    height: "720px",
    borderRadius: "2%"
  }
};
