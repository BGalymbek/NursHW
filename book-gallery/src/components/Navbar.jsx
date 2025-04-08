import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">📚 Кітап сөресі</h1>
        <div className="nav-links">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/book-gallery" className="nav-link">Book Gallery</Link>
        </div>
    </nav>
  );
}