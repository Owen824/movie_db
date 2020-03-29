import React from "react"
import Header from "./header.jsx"
import MovieList from "../components/movieList.jsx"

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <MovieList topic="popular" url="/movie/popular"/>
                <MovieList topic="upcoming" url="/movie/upcoming"/>
                <MovieList topic="now playing" url="/movie/now_playing"/>
            </div>
        )
    }
}

export default Homepage;