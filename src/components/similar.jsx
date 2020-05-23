import React from "react"
import styles from "./similar.css"
import Movie from "./movie.jsx"

const Similar = (props) => {
    const movielist = [];
    props.movies.map(function (movie) {
        if (movie.backdrop_path === null) { }
        else {
            movielist.push(movie);
        }
    });
    movielist.splice(5);
    const similarlist = movielist.map(function (item) {

        return <Movie movie={item} />
    })
    // console.log(movielist);


    return (

        <div className={styles.similarContainer}>
            <div className={styles.similarTitle}>
                <h3>
                    Similar
                </h3>
            </div>

            <div className={styles.similarList}>
                {similarlist}
            </div>
        </div>
    )
}

export default Similar