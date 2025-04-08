import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import BookGallery from "./pages/BookGallery";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-gallery"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BookGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BookDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
