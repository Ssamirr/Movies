import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setshowWishlist] = useState(false);
  const [movies, setMovies] = useState([]);
  const [check, setCheck] = useState(false);

  return (
    <div >
      <Header
        search={search}
        setSearch={setSearch}
        wishlist={wishlist}
        setWishlist={setWishlist}
        movies={movies}
        setMovies={setMovies}
        check={check}
        setCheck={setCheck}
        showWishlist={showWishlist}
        setshowWishlist={setshowWishlist}
      />
      <Cards
        search={search}
        setSearch={setSearch}
        wishlist={wishlist}
        setWishlist={setWishlist}
        movies={movies}
        setMovies={setMovies}
        check={check}
        setCheck={setCheck}
        showWishlist={showWishlist}
        setshowWishlist={setshowWishlist}
      />
    </div>
  );
}

export default App;
