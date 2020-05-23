import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import person from '../person.png';
import socoLogo from '../socoLogo.png';
import Chart from './Chart';
import AssignmentsChart from './AssignmentsChart';



export default class Header extends Component {
    render() {
        return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light shadow-sm" id="mainNav">
		<div className="navbar-brand d-flex">
			<img src={socoLogo} height="35"/>
			<h4 className="text-muted ml-2 mt-1">React-based User Dashboard</h4>
        </div>
		
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
		
        <div className="collapse navbar-collapse align-middle" id="navCollapse">
          <ul className="navbar-nav ml-auto">
			<li className="nav-item mt-1">
      <Link to="/Myassignment">

      <h6 id="myassignment" className="text-muted mt-3 mx-2">   Assignment Progress </h6>
      </Link> 

            </li>
			<li className="nav-item mt-1">
        <Link to="resources">
                <h6 id="myresource" className="text-muted mt-3 mx-2"> Resources Usage</h6>
                </Link>
            </li>
            <Switch>
              <Route exact path="/Myassignment">
              

              </Route>
            </Switch>
			<li className="nav-item dropdown ml-4">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
                <span>User</span>
                <img className="rounded-circle" height="35" src={person}/>
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow bg-light">
				<div className="dropdown-item text-secondary">
					<p>Age: xx  <br/>Gender: x <br/> Group: X</p>
        </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-secondary" href="#" data-toggle="modal" data-target="#changeModal">
                  <i className="fas fa-exchange-alt mr-2"></i>Change User
                </a>
              </div>
            </li>
          </ul>
        </div>
    </nav>
        )
    }
}

