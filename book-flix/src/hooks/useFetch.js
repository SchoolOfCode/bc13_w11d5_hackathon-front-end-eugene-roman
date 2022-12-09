import { useEffect, useState } from "react";
// import env from "react-dotenv";

function useFetch() {
  const URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

  const [books, setBook] = useState([{}]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchBook() {
    const response = await fetch(`${URL}api/books/search`);
    const data = await response.json();
    console.log("book data: ", data);
    setBook(data.payload);
  }

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  console.log("books state: ", books);

  return [books];
}

export default useFetch;
