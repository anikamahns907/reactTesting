import React from 'react';
import whalePic from './whale-wave.jpg'

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.displayImages = this.displayImages.bind(this);
    }


displayImages(num){
    if (num === '1')
    return(<img className = "sizer" src = {whalePic}></img>);
}


 render() {
    var numPic = this.props.numberOfPictures;
    var theImages = this.displayImages(numPic);
    return(<div>{theImages}</div>); 
  }
}

export default Images;

