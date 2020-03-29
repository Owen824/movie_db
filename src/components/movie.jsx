import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"



const Movie = props =>{
    let pageRoute= "/movie/"+props.movie.id;
    const Item=styled.li`
        list-style:none;   
        font-size:0; 
        box-shadow:5px 8px 12px #888888;
    `;
    const TitleWrap=styled.div`
        width:185px;
        height:40px;
        
    `;
    const MovieTitle=styled.h6`
        overflow:hidden;
        color:#000;
        font-weight:600;
        font-size:14px;
        padding:5px 10px;
        line-height:30px;
        text-align:center;
        white-space:nowrap;
        text-overflow: ellipsis;

    `;
    
    return(
        <Item className="movie-item" >
            <Link to={pageRoute} style={{ textDecoration: 'none' }}>
                <img src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} alt="movie_poster"/>
                <TitleWrap>     
                        <MovieTitle>{props.movie.title}</MovieTitle>
                </TitleWrap>
            </Link>
        </Item>
    )
}

export default Movie