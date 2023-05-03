import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api';

function Inicio() {
  const [latestReleases, setLatestReleases] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [popularManga, setPopularManga] = useState([]);
  const [mostSearchedBooks, setMostSearchedBooks] = useState([]);
  const [mostSearchedManga, setMostSearchedManga] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [latestReleasesResponse, popularBooksResponse, popularMangaResponse, mostSearchedBooksResponse, mostSearchedMangaResponse] = await Promise.all([
        api.get('/latest-releases'),
        api.get('/popular-books'),
        api.get('/popular-manga'),
        api.get('/most-searched-books'),
        api.get('/most-searched-manga'),
      ]);

      setLatestReleases(latestReleasesResponse.data);
      setPopularBooks(popularBooksResponse.data);
      setPopularManga(popularMangaResponse.data);
      setMostSearchedBooks(mostSearchedBooksResponse.data);
      setMostSearchedManga(mostSearchedMangaResponse.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Últimos lanzamientos</h1>
      <ul>
        {latestReleases.map((book) => (
          <li key={book.id}>
            <Link to={`/libros/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>

      <h1>Libros más populares</h1>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/libros/${book.id}`}>{book.title}</Link> por {book.author}
          </li>
        ))}
      </ul>

      <h1>Manga más popular</h1>
      <ul>
        {popularManga.map((manga) => (
          <li key={manga.id}>
            <Link to={`/manga/${manga.id}`}>{manga.title}</Link> por {manga.author}
          </li>
        ))}
      </ul>

      <h1>Libros más buscados</h1>
      <ul>
        {mostSearchedBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/libros/${book.id}`}>{book.title}</Link> por {book.author}
          </li>
        ))}
      </ul>

      <h1>Manga más buscado</h1>
      <ul>
        {mostSearchedManga.map((manga) => (
          <li key={manga.id}>
            <Link to={`/manga/${manga.id}`}>{manga.title}</Link> por {manga.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;