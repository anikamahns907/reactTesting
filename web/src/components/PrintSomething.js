import React from 'react';

class PrintSomething extends React.Component {




printSomething(words) {
    console.log(words);
  }


 render() {
     
     return( 
         <div className="App">
             
                <h1 className= "makePurple" onClick={()=> this.printSomething(this.props.messageHere)}> {this.props.messageHere} </h1>

        </div>
    ); 
  }
}

export default PrintSomething;

