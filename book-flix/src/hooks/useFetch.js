import { useEffect, useState } from "react";
// import env from "react-dotenv";

function useFetch() {
  const URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

  const [books, setBook] = useState([{}]);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`${URL}api/books/search`);
      const data = await response.json();
      console.log("book data: ", data);
      setBook(data.payload);
    }
    fetchBook();
  }, [URL]);

  console.log("books state: ", books);

  return [books];
}

export default useFetch;
