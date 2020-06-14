import React from "react"
import styled from "styled-components"
import tmdb from "../api/tmdb"
import Movie from "./movie.jsx"

class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state={movielist:[]};

    }

    componentDidMount(){
        tmdb.apiCall(this.props.url,this.props.params,data=>{
            data.results.splice(7);
            this.setState({movielist:data.results.splice(1)})
        });
    }

    render(){
        let list=this.state.movielist.map((item,index)=>{
            // console.log(item.title);
            return <Movie movie={item} key={index}/>
        });
        const TopicWrapper = styled.div`
            margin:20px 0;
            font-family: sans-serif;
        `;
        const TopicTitle = styled.h4`
            display:block; 
            font-size:24px;
            font-weight:800;
            // background:#d5d5d5;
            margin-left:30px;
            letter-spacing:1px;
            text-transform: uppercase;
        `;
        const ListWrapper = styled.ul`
            
            display:flex;
            background:#fff;
            padding: 20px 0;
            margin:25px 0;
            justify-content:space-around;
            width:100%;
            background:#f9f9f9;
        `;

        
        return(
        <TopicWrapper>
        <TopicTitle>{this.props.topic}</TopicTitle>
        <ListWrapper>{list}</ListWrapper>
        </TopicWrapper>    
        )
    }
}

export default MovieList;