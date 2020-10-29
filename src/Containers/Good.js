import React from 'react'
import Item from '../Components/Item'

function Good(props) {
    const styling = {
        border: "5px solid #0080b0",
        padding: "2vh 5vw",
        margin: "2vh 0"
    }

    let goodOnes = props.artists.map( a => 
    <Item        
        badClickHandler={props.badClickHandler}
        goodClickHandler={props.goodClickHandler}
        member={a}
        /> )
    return(
        <div style={styling}>I'm a Fan of...
           {goodOnes} 
        </div>
    )
}
export default Good