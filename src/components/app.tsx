import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation'
import history from '../history'
// import { Routes } from "../constants/routes";

class App extends Component {
    render(){
        return (
            <Router history={history}>
            <Navigation/>
            </Router>
        )
    }
    
          
            // <div>
            //     <h1>Application</h1>
            // </div>
   
}

export default App