import React from "react"
import styles from "./cast.css"

const Cast =(props)=>{
        console.log(props.profile_path);
    return(
        <div className={styles.cast}> 
            {/* <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w154${props.person.profile_path}`} alt=""/> */}
            <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w154${props.person.profile_path}`} alt=""/>
            <div className={styles.castPerson}>
                    <h3 className={styles.castName}>{props.person.name}</h3>
                    <h3 className={styles.castCharacter}>{props.person.character}</h3>
            </div>
        </div>
    )
}

export default Cast