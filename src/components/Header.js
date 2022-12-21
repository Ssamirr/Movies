import React, { useEffect, useRef } from 'react'

function Header(props) {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const SearchValue = (event) => {
        props.setSearch(event.target.value);
    }

    const getMovies = (event) => {
        event.preventDefault();
        props.setCheck(true);
    }

    const showFavorites = () => {
        props.setshowWishlist(!props.showWishlist);
    }

    return (
        <>
            <div className='container header'>
                <form onSubmit={getMovies} className="header--left">
                    <input ref={inputRef} value={props.search} onChange={SearchValue} placeholder='Search' />
                    <button type='submit'>Search</button>
                </form>
                <div className='header--right'>
                    <button onClick={showFavorites}>{props.showWishlist ? "Movies" : "Favorites"} </button>
                </div>
            </div>
        </>
    )
}

export default Header