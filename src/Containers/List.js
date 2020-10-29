import React from 'react'
import Item from '../Components/Item'

export default class List extends React.Component {

    render(){
        
        const styling = {
            border: "5px solid #002080",
            padding: "1vh 5vw"
        }
        let artists = this.props.artists.items.map( item => {
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
                {artists}
            </div>
        )
    }
}