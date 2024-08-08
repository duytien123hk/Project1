import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";
import Book from "./Book";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      if (search) {
        const response = await BooksAPI.search(search);
        if (response.error) {
          setBooks([]);
        } else {
          setBooks(
            response.filter(
              (book) => book.imageLinks && book.imageLinks.thumbnail
            )
          );
        }
      }
    };
    getBooks();
  }, [search]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    if (search === "") {
      setBooks([]);
    }
  };

  async function handleSelect(book, shelf) {
    await BooksAPI.update(book, shelf);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} handleSelect={handleSelect} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
