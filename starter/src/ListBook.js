import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
const ListBook = () => {
  const [bookshelf, setBookshelf] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await BooksAPI.getAll();
    makeBookShelfs(response);
  }

  const makeBookShelfs = (response) => {
    let bookshelf = {};
    response.forEach((element) => {
      let shelf = element.shelf;
      if (bookshelf[shelf]) {
        bookshelf[shelf].push(element);
      } else {
        bookshelf[shelf] = [element];
      }
    });
    setBookshelf(bookshelf);
  };

  const handleSelect = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      fetchData();
    });
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(bookshelf).map((shelf) => (
            <BookShelf
              key={shelf}
              shelf={shelf}
              bookShelf={bookshelf[shelf]}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBook;
