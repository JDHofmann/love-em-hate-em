import React from 'react'

export default class Item extends React.Component {

    render(){
        const styling = {
            padding: ".5vh 5vw",
            margin: ".5vh 1vw",
            backgroundColor: "#00b080",
            color: "#eeeeee"
        }
        return(
            <div style={styling}>
                <h3>{/* something here */}</h3>
                <img 
                    className="image-thumb"
                    src={/* something here */}></img>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}