import React from 'react';

var favColors = ["#ACDFE0", "#A2CF9F", "#F0D6F1", "#FC2751", "#0636A4"]


class Colors extends React.Component {
  constructor(props){
    super(props)
    this.state = {colorNum: 0}
  }


  changeColor() {
    if (this.state.colorNum >= 0 && this.state.colorNum < 4) {
        this.setState({colorNum: this.state.colorNum + 1})
    }
    else {
        this.setState({colorNum: 0})
    }
}
  

  render() {
    return(
      <div className="App">
          <h1 style={{color: favColors[this.state.colorNum]}} onClick={()=> this.changeColor()}>{this.props.displayThisPls}</h1>
      </div>
    ); 
  }
}

export default Colors;

