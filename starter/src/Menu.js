import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
const Menu = ({ id, handleSelect }) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    let isMounted = true;
    const getBook = async () => {
      const response = await BooksAPI.get(id);
      if (isMounted) {
        setBook(response);
      }
    };
    getBook();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handle = (e) => {
    const shelf = e.target.value;
    handleSelect(book, shelf);
  };

  return (
    <select value={book.shelf} onChange={handle}>
      <option value="" disabled>
        {book.shelf === "none" ? "Add to..." : "Move to..."}
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      {<option value="none">None</option>}
    </select>
  );
};

export default Menu;
