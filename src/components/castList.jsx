import React from "react"
import Cast from "./cast.jsx"
import styles from "./castList.css"

const CastList=(props)=>{
    let castList = props.castlist;
    //將資料縮短成6筆
    castList.splice(6);
    const list= props.castlist.map(function(item){
        return(<Cast person={item}/>)
    });
    return(
        <div className={styles.castContainer}>
        <div className={styles.castTitle}>
            <h3>
                Cast
            </h3>
        </div>
        <div className={styles.castList}>
            {list}
        </div>
        </div>
    )
}
export default CastList