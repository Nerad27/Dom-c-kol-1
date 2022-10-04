import React from "react";

class Card extends React.Component {
    render() {
      return(
        <>
        <p>{this.props.text}</p>
        <img src={this.props.image}/>
        <h2>{this.props.title}</h2>
        <h3>{this.props.header}</h3>
        <button>{this.props.button}</button>
       </>
      )
      
    }
  }
  
  
  export default Card;