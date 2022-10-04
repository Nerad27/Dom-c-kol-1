
import React from 'react';

 class Box extends React.Component {
  render() {
    return(
      <>
      <p>{this.props.text}</p>
      <p style={{}}>{this.props.value}</p>
      
     </>
    )
    
  }
}


export default Box;