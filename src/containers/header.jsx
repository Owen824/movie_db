import React from "react"

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <nav>
                    <h2><a href="#home">Movie Data</a></h2>
                    <div className="search-bar">
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header