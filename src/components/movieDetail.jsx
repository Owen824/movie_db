import React from "react"
import tmdb from "../api/tmdb.js"
import styles from "./movieDetail.css"
import Circular from "./circular.jsx"
import Similar from "./similar.jsx"
import CastList from "./castList.jsx"
import Trailer from "./trailer.jsx"

 
class MovieDetail extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            title:"",
            id:"",
            date:"",
            rating:"",
            overview:"",
            cast:[],
            poster:"",
            backdrop:"",
            runtime:{},
            similar:[],
            videos:[],
            });
            this.duration=this.duration.bind(this);
       
    }
    componentDidMount(){
        //當component建構完時，請求api
        tmdb.apiCall(`/movie/${this.props.data}`,"&append_to_response=videos,similar,credits",data=>{
            this.setState({
                title:data.title,
                id:data.id,
                date:data.release_date,
                rating:data.vote_average,
                overview:data.overview,
                cast:data.credits.cast,
                poster:data.poster_path,
                backdrop:data.backdrop_path,
                runtime:this.duration(data.runtime),
                similar:data.similar.results,
                videos:data.videos.results,
            })
            
        });
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);

        if(this.state.id!==Number(this.props.data)){
            tmdb.apiCall(`/movie/${this.props.data}`,"&append_to_response=videos,similar,credits",data=>{
                // console.log(data);
                this.setState({
                    title:data.title,
                    id:data.id,
                    date:data.release_date,
                    rating:data.vote_average,
                    overview:data.overview,
                    cast:data.credits.cast,
                    poster:data.poster_path,
                    backdrop:data.backdrop_path,
                    runtime:this.duration(data.runtime),
                    similar:data.similar.results,
                    videos:data.videos.results,
                })
                
            });
        }


      }
    
    // 計算電影共幾小時幾分
    duration(time){
        let timeObject={
            minutes:0,
            hours:0
        } 
        timeObject.minutes= time%60;
        timeObject.hours= (time-timeObject.minutes)/60;
        // console.log(timeObject.hours);
        return timeObject
    }
    
    render(){

        // console.log(this.state.runtime.hours);
        return(
            <div className={styles.backdrop}   style={{backgroundImage:`linear-gradient(to right,rgba(50,20, 20, 0.7),rgba(70, 35, 35, 0.6)),url(https://image.tmdb.org/t/p/w1280${this.state.backdrop})`}}>
                {/* <img src={`https://image.tmdb.org/t/p/w1280${this.state.backdrop}`} alt="movie_backdrop"/> */}
                <div className={styles.movieContainer}>
                    <div className={styles.posterContainer}>
                        <img className={styles.moviePoster} src={`https://image.tmdb.org/t/p/w300${this.state.poster}`} alt="movie_poster"/>
                    </div>    
                    <div className={styles.contentDetail}>
                        <div className={styles.movieTitle}>
                            <h2>{this.state.title}</h2>
                        </div>
                        <div className={styles.detailList}>
                            <span>DATE: {this.state.date}</span>
                            <span>RUNTIME: {this.state.runtime.hours}H {this.state.runtime.minutes}M</span>
                            <div className={styles.circular} ><Circular rating={this.state.rating}/></div>
                        </div>
                        <div className={styles.movieOverview} onClick={this.changeColor}>
                            <h3>Overview</h3>
                            <p>
                                {this.state.overview}
                            </p>
                        </div>
                    </div>

                </div>
                <CastList castlist={this.state.cast}/>
                <Similar movies={this.state.similar}/>
                <Trailer videos={this.state.videos}/>

            </div>
        )
    }
}
export default MovieDetail