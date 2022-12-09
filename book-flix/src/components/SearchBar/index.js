// import React, { useState } from "react";
// import env from "react-dotenv";

// const SearchBar = ({ setBook }) => {
//   const [search, setSearch] = useState();

//   async function getBookBySearch(e) {
//     e.preventDefault();
//     const response = await fetch(`${env.URL}api/books/search=${search}`);
//     const data = await response.json();
//     console.log("book data: ", data);
//     setBook(data);
//   }

//   return (
//     <form id="search-bar" onSubmit={getBookBySearch}>
//       <input
//         id="search-input"
//         type="text"
//         placeholder="Enter by Name, Author or Date"
//         onChange={(e) => setSearch(e.target.value)}
//       ></input>
//       <input type="submit" value="Search"></input>
//     </form>
//   );
// };

// export default SearchBar;
