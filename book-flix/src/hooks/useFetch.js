import { useEffect, useState } from "react";
import env from "react-dotenv";

function useFetch() {
  const [books, setBook] = useState([]);

  async function fetchBook() {
    const response = await fetch(`${env.URL}api/books/search`);
    const data = await response.json();
    console.log("book data: ", data);
    setBook(data.payload);
  }

  useEffect(() => {
    fetchBook();
  });

  console.log("books state: ", books);

  return [books];
}

export default useFetch;
