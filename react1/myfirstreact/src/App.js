import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contact";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login";
import Calculator from "./components/Calculator.js";
import "./Wheather.css"
import Wheather from "./Wheather";








 

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };      

  render() {
    return (
      <div>
        <header style={{textAlign:"center",
        backgroundColor:"green",
        backgroundSize:"cover",
        padding:"10px",
        fontSize:40,
        borderRadius:25
        }}>Welcome React</header>
        
        <Router>
          <Navbar />
        
          <Switch>
            <Route path="/" components={Home} exact>
              <Home />
            </Route>
            <Route path="/about" components={About} exact>
              <About/>
            </Route>
            <Route path="/Skills" components={Skills} exact>
              <Skills />
            </Route>
            <Route path="/contact" components={Contacts} exact>
              <Contacts />
            </Route>
            <Route path="/Signup" components={Signup} exact>
              <Signup />
            
           </Route>
           
          </Switch>
          
        </Router>
        <br />
        <h1 style={{fontSize:40,color:"red",textAlign:"left",padding:"20px"}}>Increment And Decrement Operations</h1>
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
       
        <h1>hi mahendra sgndfghdg</h1>
        <br />
        <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, 
          <br />sed do eiusmod tempor<br /> incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br /> irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborem
C/O https://placeholder.com/text/lorem-ipsum/</p>
<br />
<h1 style={{textAlign:"center",color:"green"}}>login form</h1>
<br />
<Login />
<br />

<br />
<h1 style={{textAlign:"center",color:"red"}}>CALUCULATOR</h1>
    <Calculator />
    <br />
    <Wheather />
    <br/>
    <br />
    <h1 style={{textAlign:"center",color:"violet",textDecorationLine:"underline"}}>IMAGE GALLERY :-</h1>
    <br />
    <br />
    <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <img 
      src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=350"
      alt="new"
      />
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=300"
      alt="new"
      />
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"/>
      <img 
      src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
      alt="new"/>
      
      </div> 
      

    );
  }
}



export default App;