import "./App.css";
// import SearchBar from "../SearchBar";
import AddBook from "../AddBook";
import BookCard from "../BookCard";

import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../ContextTheme";
import { useState } from "react";

function App() {
  const [books] = useFetch();

  const [bool, setBool] = useState(true);
  const theme = { setBool, bool };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>BookFlix</h1>
        <div id="search-add">
          {/* <SearchBar setBook={setBook} /> */}
          <AddBook />
          <button onClick={() => setBool(!bool)}>
            Press for random grey background
          </button>
        </div>
        <div className="BooksContainer">
          {books.map((book, i) => (
            <BookCard key={i} info={book} />
          ))}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
