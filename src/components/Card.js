import React, { Component } from 'react'
import Card0 from './Card0.js'

export default class Card extends Component {
    render() {
        return (
          <div className="container-fluid mt-4 text-muted">
        <div className="row">
      
            <Card0 name={"Current Assignment"} Subname={"React"} />
            <Card0 name={"Last Assignment"} Subname={"MongoDB"}/>
            <Card0 name={"My task"} Subname={"Task 4.2"}/>
            <Card0 name={"Unread Messages"} Subname={"15"}/>

              
           
      
    
            </div>
        </div>
          
        )
    }
}
