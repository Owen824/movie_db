import React from "react"
import Header from "./header.jsx"
import MovieList from "../components/movieList.jsx"

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div style={{position:"relative",top:"100px"}}>
                <MovieList topic="popular" url="/movie/popular" params=""/>
                <MovieList topic="upcoming" url="/movie/upcoming" params=""/>
                <MovieList topic="now playing" url="/movie/now_playing" params=""/>
                </div>
            </div>
        )
    }
}

export default Homepage;