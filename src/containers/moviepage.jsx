import React from "react"
import Header from "./header.jsx"
import MovieDetail from "../components/movieDetail.jsx"

class Moviepage extends React.Component{
    render(){
        const id=this.props.match.params.id;
        return(
        <div>
            <Header/>
            
            <div style={{position:"relative",top:"76px"}}>

            <MovieDetail data={id}/>
            
            </div>
        </div>
        )
    }
}
export default Moviepage