import React from "react";

const BookCard = ({ info }) => {
  return (
    <div id="book-card">
      <img id="card-img" src={info.image} alt="Book cover"></img>
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
