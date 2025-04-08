import { useNavigate } from "react-router-dom";
import books from "../data/books";

export default function BookGallery() {
  const navigate = useNavigate();

  // 6 кітапты әртүрлі позицияларға орналастыру
  const getBookSizeClass = (index) => {
    const positions = [
      "book-item--wide",    // 1 - Көлденең үлкен (2x1)
      "book-item--tall",    // 2 - Тік үлкен (1x2)
      "book-item--large",   // 3 - Үлкен шаршы (2x2)
      "book-item--standard", // 4 - Стандарт
      "book-item--standard", // 5 - Стандарт
      "book-item--wide"     // 6 - Көлденең үлкен (2x1)
    ];
    return positions[index] || "book-item--standard";
  };

  // Тек 6 кітапты алу
  const displayedBooks = books.slice(0, 6);

  return (
    <div className="book-gallery">
      <div className="book-grid">
        {displayedBooks.map((book, index) => (
          <div
            key={book.id}
            className={`book-item ${getBookSizeClass(index)}`}
            onClick={() => navigate(`/book/${book.id}`)}
          >
            <div className="book-image-container">
              <img 
                src={book.image} 
                alt={book.title} 
                className="book-image"
              />
              <div className="book-overlay">
                <span className="view-details">View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}