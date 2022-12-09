import React from "react";
import "./index.css";

import { useContext } from "react";
import { ThemeContext } from "../ContextTheme";

const BookCard = ({ info }) => {
  console.log("this is info: ", info);

  const { bool } = useContext(ThemeContext);

  return (
    <div id="book-card" style={{ background: bool ? "white" : "grey" }}>
      <img id="card-img" src={info.cover} alt="Book cover"></img>
      <div id="card-info">
        <h2>{info.title}</h2>
        <h3>{info.author}</h3>
        <p>{info.description}</p>
        <h4>{info.date}</h4>
      </div>
    </div>
  );
};

export default BookCard;
