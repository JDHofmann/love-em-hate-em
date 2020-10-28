import React from 'react'
import Item from '../Components/Item'

export default class List extends React.Component {

    render(){
        
        const styling = {
            border: "5px solid #002080",
            padding: "1vh 5vw"
        }

        return(
            <div style={styling}>
                <h2>List</h2>
                {items}
            </div>
        )
    }
}