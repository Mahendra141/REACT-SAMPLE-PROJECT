import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <form action="" method="">
                    <input type="text" placeholder="Username"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login
