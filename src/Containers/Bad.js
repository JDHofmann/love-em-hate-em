import React from 'react'
import Item from '../Components/Item'

function Bad(props) {
    const styling = {
        border: "5px solid #f04040",
        padding: "2vh 5vw",
        margin: "2vh 0"
    }

    let badOnes = props.artists.map( a => 
        <Item 
        badClickHandler={props.badClickHandler}
        goodClickHandler={props.goodClickHandler}
        member={a}
        />
        )

    return(
        <div style={styling}>Not a Fan of...
            {badOnes}
        </div>
    )
}
export default Bad