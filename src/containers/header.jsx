import React from "react"
import {Link} from "react-router-dom"
import styles from "./header.css"
import {ReactSVG} from "react-svg"




class Header extends React.Component{
    render(){
    
        
        return(
            <div className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navLogo}>
                    <h2><a  className={styles.navTitle} href="#">Movie Data</a></h2>
                    <Link to="/">
                        <ReactSVG className={styles.iconFilm} src="./film-solid.svg"/>
                    </Link>
                
                    </div>
                    <div className={styles.searchBar}>
                    <Link to="/" >
                        <ReactSVG className={styles.iconHome} src="./home-solid.svg"/>
                    </Link>
                    {/* <Link to="/" className={`${styles.iconHome} fas fa-home`}>
                    </Link> */}
                    <Link to="/search">
                        <ReactSVG className={styles.iconSearch} src="./search-solid.svg"/>
                    </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header