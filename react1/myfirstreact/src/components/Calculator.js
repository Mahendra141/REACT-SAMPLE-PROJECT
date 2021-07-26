import React, { Component } from 'react'

export class Calculator extends Component {
    state={
        a:10,
        b:20  
    };
    setA= e => {
        this.setState({
            a: parseInt(e.target.value)
        });
    };
    setB= e => {
        this.setState({
            b: parseInt(e.target.value)
        });
    };
    render(){
        const add = this.state.a + this.state.b;
        return (
            <div style={{textAlign:"center",fontSize:40}}>
                <label>first</label>
                <input style={{backgroundColor:"green",fontStyle:"initial"}} className='inputA' onChange={this.setA} placeholder="enter any number" maxLength="80"/>
                <label>second</label>
                <input  style={{backgroundColor:"green",fontSize:30}} onChange={this.setB} placeholder="enter any number"/>
                <br />
                {' A: ' + this.state.a   +    ' B: '   + this.state.b}
                <br />
                <hr />
               {'Addittion : ' + add }
               <br />
               <hr />
               {'Subtract : ' + (this.state.a - this.state.b )}
               <br />
               <hr />
               {'Multiplication : ' + this.state.a * this.state.b }
               <br />
               <hr />
               {'Division : ' + this.state.a / this.state.b }
               <br />
               <hr />
               {'modules : ' + this.state.a % this.state.b }
               <br />
               <hr />
               {'Comparision : ' + this.state.a || this.state.b }


            </div>
        )
    }
}

export default Calculator;
