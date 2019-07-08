import React from "react";
import "./Character.css";

export default function ShowMarks(props) {
  return (
    <div className="char-info">
      {props.grades.map((grade, index) => (
        <div key={index}>
          <p>
            Test {index} : {grade}
          </p>
        </div>
      ))}
    </div>
  );
}
