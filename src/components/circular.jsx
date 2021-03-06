import React from "react"
import styles from "./circular.css"

const Circular =(props)=>{
        
    let circlevalue={
        strokeDashoffset: `calc( 220 - (220 * ${props.rating * 10} / 100))`,
    };
    
    return(
        <div className={styles.circularContainer}>
            <svg>
                <circle cx="35" cy="35" r="35"></circle>
                <circle style={circlevalue} cx="35" cy="35" r="35"></circle>
               
            </svg>
            <div className={styles.circularPoint}>
                <h3>{props.rating}</h3>
            </div>
            
        </div>
    )
}
export default Circular