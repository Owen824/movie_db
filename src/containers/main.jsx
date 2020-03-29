import React from "react"
import Homepage from "./homepage.jsx"
import Moviepage from "./moviepage.jsx"
import Searchpage from "./searchpage.jsx"
import {HashRouter,Route} from "react-router-dom";


class Main extends React.Component{
    render(){
        
        return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/movie/:id" component={Moviepage}/>
                    <Route path="/search" component={Searchpage}/>
                </div>
            </HashRouter>
        )
    }
}
export default Main;