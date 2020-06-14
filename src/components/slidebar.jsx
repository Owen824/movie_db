import React from "react"
import tmdb from "../api/tmdb"
import styles from "./slidebar.css"


class Slidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { radioName:"",movielist: [] };
        // this.changeState = this.changeState.bind(this);
        
    }

    componentDidMount(){
        tmdb.apiCall(this.props.url, this.props.params, data => {
            data.results.splice(5);
            this.setState({ movielist: data.results })
        });
    }

    changeState(event){
        // console.log(event.target.value);
        this.setState({radioName:event.target.value})
    }

    render() {
        let slidelist = this.state.movielist.map((item,index) => {
            return (
                <div className={styles.slide} key={index}>
                    <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt="" />
                </div>
            )
        })

        return (
            <div className={styles.slidebar}>
                <input type="radio" name="r" id={styles.r1} checked={this.state.radioName==='r1'} onChange={this.changeState.bind(this)} value='r1'/>
                <input type="radio" name="r" id={styles.r2} checked={this.state.radioName==='r2'} onChange={this.changeState.bind(this)} value='r2'/>
                <input type="radio" name="r" id={styles.r3} checked={this.state.radioName==='r3'} onChange={this.changeState.bind(this)} value='r3'/>
                <input type="radio" name="r" id={styles.r4} checked={this.state.radioName==='r4'} onChange={this.changeState.bind(this)} value='r4'/>
                <input type="radio" name="r" id={styles.r5} checked={this.state.radioName==='r5'} onChange={this.changeState.bind(this)} value='r5'/>
                
                <div className={styles.slides}>
                    {slidelist}
                </div>
                <div className={styles.slidesbutts}>
                    <label htmlFor={styles.r1} className={styles.butt}></label>
                    <label htmlFor={styles.r2} className={styles.butt}></label>
                    <label htmlFor={styles.r3} className={styles.butt}></label>
                    <label htmlFor={styles.r4} className={styles.butt}></label>
                    <label htmlFor={styles.r5} className={styles.butt}></label>
                </div>
            </div>
        )
    }
}
export default Slidebar