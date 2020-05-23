import React from "react"
import Homepage from "./homepage.jsx"
import Moviepage from "./moviepage.jsx"
import {HashRouter,Route} from "react-router-dom"


class Main extends React.Component{
    render(){
        
        return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/movie/:id" component={Moviepage}/>
                </div>
            </HashRouter>
        )
    }
}
export default Main;