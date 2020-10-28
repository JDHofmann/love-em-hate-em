import React from 'react'
import Item from '../Components/Item'
import {apiResponse} from '../api'

export default class List extends React.Component {

    render(){
        
        const styling = {
            border: "5px solid #002080",
            padding: "1vh 5vw"
        }

        let items = apiResponse.items.map( item => {
            return (
            <Item 
            badClickHandler={this.props.badClickHandler}
            goodClickHandler={this.props.goodClickHandler} member={item} 
            />
            )
        })

        return(
            <div style={styling}>
                <h2>List</h2>
                {items}
            </div>
        )
    }
}