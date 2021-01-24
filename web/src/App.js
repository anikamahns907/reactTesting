import React from 'react';
import './App.css';
import axios from 'axios';
import Colors from './components/Colors'
import PrintSomething from './components/PrintSomething'
import Images from './components/Images'
import VidTextPic from './components/VidTextPic'
import logoSwim from "./components/actualLogo.jpg"


var favColors = ["#ACDFE0", "#A2CF9F", "#F0D6F1", "#FC2751", "#0636A4"]


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: "joe", age: 4, greeting: "I just pooped", hairCut: "", jacob: "", colorNum: 0, catFact: "", covidFact: "", countryName: "pooop", countryCases: 0, askJoke: "", answerJoke: "", setArray: 0, numberPics: 1, whichType: null}
    
  }


  printSomething(words) {
    console.log(words);
  }
  changeGreeting(){
    this.setState({greeting: "welcome to the best site ever"});
  }

  changeName(newName) {
    this.setState({name: newName});
  }

  changeAge(isOlder) {
    if (isOlder === true) {
      this.setState({age: this.state.age+1});
    }
    else {
      this.setState({age: this.state.age-1});
    }
}

  isHaircut(needHaircut) {
    if (needHaircut === true) {
      this.setState({hairCut: "yes" });
    }
    else {
      this.setState({hairCut: "no" });
    }
  }

  jacob(listens) {
    if (listens === true) {
      this.setState({jacob: "yes" });
    }
    else {
      this.setState({jacob: "no" });
    }
  }

  changeColor(intArray) {
    if (intArray === 0) {
      this.setState({colorNum: 1});
    }
    else if (intArray === 1) {
      this.setState({colorNum: 2});
    }
    else if (intArray === 2) {
      this.setState({colorNum: 3});
    }
    else if (intArray === 3) {
      this.setState({colorNum: 4});
    }
    else if (intArray === 4) {
      this.setState({colorNum: 0});
    }
  }

  getFact() {
  // Make a request for a user with a given ID
  axios.get('https://cat-fact.herokuapp.com/facts/random')
    .then( response =>{
      //// handle success
      console.log(response.data.text);
      this.setState({catFact: response.data.text })
    })
    .catch( (error) => {
      // handle error
      console.log(error);
    });
    
  }

  getSummary() {
    axios.get('https://api.covid19api.com/summary')
    .then(response => {
      console.log(response.data.Global.NewDeaths);
      this.setState({covidFact: response.data.Global.NewDeaths});
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }

  getCases(countryy) {
    var url = "https://api.covid19api.com/live/country/" + countryy
    axios.get(url)
    .then(response => {
      
      console.log(response.data.slice(-1)[0].Confirmed);
      this.setState({countryCases: response.data.slice(-1)[0].Confirmed});
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }

  changeCountryName(country) {
    this.setState({countryName: country})
    this.getCases(country);
  }
///var myArr = [5,6,7,8,9]
// myArr[2]

// var myArr = {car:2, one:4, name:334}
// myArr.name


  /*joking(asking) {
    var url = 'https://official-joke-api.appspot.com/random_joke'
    axios.get(url)
    .then(response=> {

      if (asking === true) {
        console.log(response.data.setup);
        console.log(response.data.id)
        this.setState({askJoke: response.data.setup})
        this.setState({answerJoke: ""})
      }
     
      
       else{
        console.log(response.data.punchline);
        console.log(response.data.id)
        this.setState({answerJoke: response.data.punchline})
      }
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
    
  }*/

  joking() {
    var url = 'https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json'
    axios.get(url)
    .then(response=> {
      if (this.state.setArray >= 0 && this.state.setArray <= 10 ) {
        this.setState({setArray: this.state.setArray +1})
      }
      else {
        this.setState({setArray: 0})
      }
        console.log(response.data[this.state.setArray].id)
        console.log(response.data[this.state.setArray].setup)
        this.setState({askJoke: response.data[this.state.setArray].setup})
        
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
    
  }
  
  jokingAnswer() {
    var url = 'https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json'
    axios.get(url)
    .then(response=> {
        console.log(response.data[this.state.setArray].punchline);
        this.setState({answerJoke: response.data[this.state.setArray].punchline})
      
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
    
  }
  changeNum(num) {
      this.setState({numberPics: num})
  }

  whichOne(type) {
    this.setState({whichType: type});
  }

  render() {
    return(

      <div className="App">
        <Colors displayThisPls = "yoyoyo" anotherThing ="hello"/>
        <Colors displayThisPls = "coding24/7"/>
        <Colors displayThisPls = "jacobsartious<3"/>

        <PrintSomething messageHere = "welcome to my crib"/>
        <PrintSomething messageHere = "sat 1540"/>
        <PrintSomething messageHere = "yoooo"/>
        <br/>
        <br/>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/oupEFDaHeJo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
        <h1 className= "makePurple" onClick={()=> this.printSomething("welcome")}>Welcome to my crib</h1>
        <h5 className= "makeRed" onClick={()=> this.printSomething("sat 1440")}>sat 1440</h5>
        <h2 className= "makeYellow" onClick={() => this.printSomething("turtle")}>sat 1540</h2>
        <h1 className= "makeGreen" onClick={()=> this.printSomething("cheez-itz")}>yoooo</h1>
        <p className= "hoverColor" onClick={()=> this.printSomething("anything")}>anything</p>
        <p className= "makeblue" onClick={()=> this.printSomething("jacob sartotious")}>blue</p>
        <h3 className= "makeblue" onClick={()=> this.printSomething("blue")} >hey</h3>
        <p onClick={()=> this.changeGreeting()}>sadsakjdhsakdhskajd {this.state.greeting}</p>
        <button onClick={()=> this.changeName("leo")}>leo</button>
        <button onClick={()=> this.changeName("Tikvah")}>tikvah</button>
        <p>welcome to my site {this.state.name}</p>
        <button onClick={()=> this.changeAge(true)}>older</button>
        <button onClick={()=> this.changeAge(false)}>younger</button>
        <p>you are {this.state.age}</p>
        <p>Do I need a haircut? {this.state.hairCut}</p>
        <button onClick={()=> this.isHaircut(true)}>yes</button>
        <button onClick={()=> this.isHaircut(false)}>no</button>
        <p>Do you listen to Jacob Sartorious? {this.state.jacob}</p>
        <button onClick={()=> this.jacob(true)}>yes</button>
        <button onClick={()=> this.jacob(false)}>no</button>
        <h1 style={{color: favColors[this.state.colorNum]}}>helllo</h1>
        <button onClick={()=> this.changeColor(this.state.colorNum)}>next color</button>
        <button onClick={()=> this.getFact()}>button </button>
        <p>{this.state.catFact}</p>
        <button onClick={()=> this.getSummary()}>click for death data </button>
        <p>New deaths worldwide: {this.state.covidFact}</p>
        <button onClick={()=> this.changeCountryName("Japan")}>Japan</button>
        <button onClick={()=> this.changeCountryName("United Kingdom")}>United Kingdom</button>
        <button onClick={()=> this.changeCountryName("United States")}>United States</button>
        <button onClick={()=> this.changeCountryName("China")}>China</button>
        <button onClick={()=> this.changeCountryName("Costa Rica")}>Costa Rica</button>
        <p>New cases in {this.state.countryName}: {this.state.countryCases} </p>
        <button onClick={()=> this.joking()}>click for funny question!</button>
        <h2>Q: {this.state.askJoke}</h2> 
        <button onClick={()=> this.jokingAnswer()}>answer </button> 
        <h3 className = "makeRed" >A: {this.state.answerJoke} &#128514; </h3>
        <button onClick={() => this.changeNum(1) }> 1 image </button>
        <button onClick={() => this.changeNum(2) }> 2 images </button>
        <button onClick={()=> this.changeNum(3)  }> 3 images </button> 
        <Images numberOfPictures = {this.state.numberPics} />
        {/* <h1 className = "header" > Mac Miller Collection </h1>   <VidTextPic typeOfDisplay = '4' />
        <h6 className = "portray">CLICK FOR DISPLAYS</h6>
        <h3 className = "forButton">  <a href="https://genius.com/artists/Mac-miller" >Profile </a></h3>
        <h3 className = "forButtonOne" onClick={() => this.whichOne("Video") }> Video </h3>
        <h3 className = "forButtonTwo"  onClick={() => this.whichOne("Text") }> Self Care lyrics </h3>
        <h3 className = "forButtonThree"  onClick={()=> this.whichOne("Image")  }> Image </h3> 
        <VidTextPic typeOfDisplay = {this.state.whichType} /> */}
        
        {/* Mac Miller Section */}
        <div className="macMillerOuterDiv">
          <div className="headerDivOuter">
            <div className="headerDiv">
              <div className="headerText">
                <h1 className = "mainMacHeaderS" > Mac Miller Collection </h1>
                <h6 className = "subtitleMacS">CLICK FOR DISPLAYS</h6>
              </div>
              <div classname="outerDivForImg">
                <img  src={logoSwim} className="logoImS"></img>
              </div>
              </div>
          </div>
          <div className="buttonDiv">
            <h3> 
              <a  className="menuText" href="https://genius.com/artists/Mac-miller" >Profile </a>
            </h3>
            <h3 className="menuText" onClick={() => this.whichOne("Video") }> Video </h3>
            <h3 className="menuText" onClick={() => this.whichOne("Text") }> Self Care lyrics </h3>
            <h3 className="menuText" onClick={()=> this.whichOne("Image")  }> Image </h3> 
          </div>
          <VidTextPic className="displayingContent" typeOfDisplay = {this.state.whichType} />
        </div>

        


      </div>

    ); 
  }
}






export default App;

//look for other APIs
//
