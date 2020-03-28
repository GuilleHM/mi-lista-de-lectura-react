import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Mi lista de lectura</h1>
      <p>Actualmente tengo {books.length} libro(-s) pendientes para leer...</p>
    </div>
  );
}

export default Navbar;