import React from "react"
import {Link,withRouter} from "react-router-dom"
import styles from "./header.css"
import Autosuggest from 'react-autosuggest'
import {ReactSVG} from "react-svg"
import tmdb from "../api/tmdb"
import theme from "./input.css"


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            suggestions:[]
        }
    }
    
    onChange(event,{newValue}){
        console.log(newValue);
        this.setState({value:newValue});
        console.log(this.state.suggestions);
        
    };

    onSuggestionsFetchRequested({value}){
        tmdb.apiCall("/search/movie",`&language=en-US&query=${value}&page=1`,data=>{
            // console.log(data);
            data.results.splice(6);
            const resultFilter=data.results.filter((item)=> {return item.poster_path!==null});

            const results= resultFilter.map(movie=>{
                let item={
                    id:movie.id,
                    title:movie.title,
                    img:movie.poster_path,
                    rating:movie.vote_average,
                    year:movie.release_date.substring(0,4)
                };
                return item
            });
            this.setState({suggestions:results});
        })
    }
    getSuggestionValue(suggestion){
        return suggestion.title;
    }
    renderSuggestion(suggestion){
        return (
            <div className={styles.suggestionContentBox}>
                <img src={`https://image.tmdb.org/t/p/w45${suggestion.img}`}  alt=""/>
                <div className={styles.suggestionTitle}>
        <span>{suggestion.title}{`(${suggestion.year})`}</span>
                </div>
               
            </div>
        )
    }

    onSuggestionSelected = (event , { suggestion, history }) => {
        event.preventDefault();
        this.props.history.push('/movie/'+ suggestion.id)
        this.setState({ value: ''});
      }
    
      onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
      };


    render(){
        const {value,suggestions}=this.state;

        const inputProps={
            placeholder:'Search movie ...',
            value,
            onChange: this.onChange.bind(this)
        };
        
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
                   
                     </div>
                    <Autosuggest  
                     theme={theme}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        onSuggestionSelected={this.onSuggestionSelected.bind(this)}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                    />
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);