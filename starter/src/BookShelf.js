import Book from "./Book";
const BookShelf = ({ shelf, bookShelf, handleSelect }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf.map((book) => (
            <Book key={book.id} book={book} handleSelect={handleSelect} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
