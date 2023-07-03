import React from 'react';
import '../Styles/SubmitButton.css';

class SubmitButton extends React.Component{
  render(){
    return(
      <button className="SubmitButton" style={{marginTop:this.props.marginTop}}>{this.props.label}</button>
    );
  }
}
export default SubmitButton;