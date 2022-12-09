import "./App.css";
import SearchBar from "../SearchBar";
import AddBook from "../AddBook";
import BookCard from "../BookCard";

import { useState } from "react";
import env from "react-dotenv";

function App() {
  const [cards, setCards] = useState([{}]);

  async function getCards(input) {
    let response = await fetch(`${env.URL}/api/cards?name=${input}`, {
      method: "GET",
    });
    let data = await response.json();

    if (data.payload.length === 0) {
      setCards([{}]);
    } else {
      setCards(data.payload);
    }
  }

  async function handleKeyDown(e) {
    if (e.key !== "Enter") {
      return;
    }
    let input = e.target.value;
    if (input === "" || input === " ") {
      setCards([{}]);
      return;
    }
    await getCards(input);
  }

  return (
    <div className="App">
      <h1>BookFlix</h1>
      <div id="search-add">
        <SearchBar />
        <AddBook />
      </div>
      <div className="BooksContainer">
        {cards.map((card, i) => (
          <BookCard key={i} info={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
