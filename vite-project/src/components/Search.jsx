import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
      );
      console.log(response);
      
      if (response.data.Response === 'False') {
        onSearch([]);
      } else {
        onSearch(response.data.Search);
      }
    } catch (error) {
      console.error('Ошибка поиска:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="search-form" onSubmit={searchMovies}>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите название фильма..."
        disabled={isLoading}
        aria-label="Поле поиска фильмов"
      />
      <button 
        type="submit" 
        className="search-button"
        disabled={isLoading}
      >
        {isLoading ? 'Поиск...' : 'Найти'}
      </button>
    </form>
  );
};

export default Search;