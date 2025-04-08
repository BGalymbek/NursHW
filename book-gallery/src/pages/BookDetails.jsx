import { useParams } from "react-router-dom";
import books from "../data/books";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) return <p className="p-4">Book not found.</p>;

  return (
    <div className="details-page">
        <div className="details-container">
            <div className="details-flex">
            <div className="details-image-container">
                <img src={book.image} alt={book.title} className="details-image" />
            </div>
            <div className="details-content">
                <div className="details-category">Book Details</div>
                <h1 className="details-title">{book.title}</h1>
                <p className="details-author">by {book.author}</p>
                <div className="details-section">
                <h2>Description</h2>
                <p className="details-description">{book.description}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
