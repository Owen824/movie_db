import React from "react"
import styles from "./trailer.css"

const Trailer=(props)=>{
    props.videos.splice(2);
    const trailers= props.videos.map(function(item){
        return(
            <iframe width="45%" height="400" src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" allowFullScreen></iframe>
        )
    })
    return(
        <div className={styles.trailerContainer}>
        <div className={styles.trailerTitle}>
            <h3>Trailer</h3>
        </div>
        <div className={styles.trailerList}>
             {trailers}
        </div>
        </div>
    )
}

export default Trailer