import React, { useState, useEffect } from 'react'



function Cards(props) {

    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true)
        fetch(`https://www.omdbapi.com/?s=${props.search || "Harry"}&apikey=ed0e95ee`)
            .then(res => res.json())
            .then(data => {
                props.setMovies(data);
                props.setCheck(false);
                setIsloading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.check])

    const getHeart = (item) => {
        props.setWishlist(() => {
            if (props.wishlist.includes(item)) {
                return props.wishlist.filter(q => q !== item)
            } else {
                return [...props.wishlist, item]
            }
        })
    }



    return (
        <div className='cards'>
            <div className='container card'>
                {isloading && <h1 style={{ textAlign: "center", width: "100%" }}>Loading...</h1>}
                {
                    props.showWishlist && props.wishlist?.map((item) => (
                        <div key={item.imdbID} className='all-movie'>
                            <div className='movie'>
                                <img src={item.Poster} className='movie--img' />
                                <span className='movie--name'>{item.Title}</span>
                                <span className='movie--year'>Year: {item.Year}</span>
                                <span style={{ background: props.wishlist.includes(item) ? "red" : "green" }} onClick={() => getHeart(item)} className='movie--heart'>
                                    <i className="fa fa-heart-o" style={{ fontSize: "28px" }}></i>
                                </span>
                            </div>
                        </div>
                    ))
                }

                {
                    !props.showWishlist && props.movies.Search?.map((item) => (
                        <div key={item.imdbID} className='all-movie'>
                            <div className='movie'>
                                <img src={item.Poster} className='movie--img' />
                                <span className='movie--name'>{item.Title}</span>
                                <span className='movie--year'>Year: {item.Year}</span>
                                <span style={{ background: props.wishlist.includes(item) ? "red" : "green" }} onClick={() => getHeart(item)} className='movie--heart'>
                                    <i className="fa fa-heart-o" style={{ fontSize: "28px" }}></i>
                                </span>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Cards