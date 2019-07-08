import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterList from "./components/CharacterList";

function App() {
  // Using Hooks to make API call and Set State.
  // useEffect needs to stop re-rendering so used [] in Params.
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const result = await axios(
        "https://www.hatchways.io/api/assessment/students"
      );
      if (!result) {
        window.alert("API Fetch Error");
      } else {
        setData(result.data.students);
      }
    }
    fetchAPI();
  }, []);

  return <CharacterList list={data} />;
}

export default App;
