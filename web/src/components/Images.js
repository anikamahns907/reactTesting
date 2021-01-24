import React from 'react';
import whalePic from './whale-wave.jpg'
import swagMan from './swag-man.jpg'
import beachPic from './beachDay.jpg'

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.displayImages = this.displayImages.bind(this);
    }


displayImages(num){
    if (num === 1) {
        return(
        <div>
            <img className = "sizer" src = {whalePic} alt = "whale"></img>
        </div>
        );
    }
    else if (num === 2) {
        return(
        <div>     
            <img className = "sizer" src = {whalePic} alt = "whale"></img>
            <img className = "sizer" src = {swagMan} alt = "swag person"></img>
        </div>
        );
    }
    else if (num === 3) {
        return(
        <div>
            <img alt = "whale" className = "sizer" src = {whalePic}></img>
            <img alt = "swag person" className = "sizer" src = {swagMan}></img>
            <img alt = "beach" className = "sizer" src = {beachPic}></img>
        </div>
        );
    }
}


 render() {
    var numPic = this.props.numberOfPictures;
    var theImages = this.displayImages(numPic);
    return(<div>{theImages}</div>); 
  }
}

export default Images;

