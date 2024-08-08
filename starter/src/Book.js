import Menu from "./Menu";

const Book = ({ book, handleSelect }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <Menu id={book.id} handleSelect={handleSelect} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((author) => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
