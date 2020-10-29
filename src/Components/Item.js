import React from 'react'

export default class Item extends React.Component {
    
    goodClickClicked = () => {
        this.props.goodClickHandler(this.props.member)
    }

    badClickClicked = () => {
        this.props.badClickHandler(this.props.member)
    }
    
    render(){
        const styling = {
            padding: ".5vh 5vw",
            margin: ".5vh 1vw",
            backgroundColor: "#00b080",
            color: "#eeeeee"
        }
        return(
            <div style={styling}>
                <h3>{this.props.member.name}</h3>
                <img 
                    className="image-thumb"
                    src={this.props.member.img}
                    alt={this.props.member.name}
                    ></img>
                <button
                    onClick={this.goodClickClicked}
                >+</button>
                <button
                    onClick={this.badClickClicked}
                >-</button>
            </div>
        )
    }
}