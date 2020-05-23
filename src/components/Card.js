import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="container-fluid mt-4 text-muted">
            <div className="row">
      
             {/* <!-- Next Assignment Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-1 order-xl-1 mb-4">
                <div className="card border-warning shadow rounded-pill">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="font-weight-bold text-warning text-uppercase">Current Assignment</div>
                        <div className="h5 mb-0">React</div>
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-calendar fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/*<!-- Last Assignment Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-3 order-xl-2 mb-4">
                <div className="card border-success shadow rounded-pill">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="font-weight-bold text-success text-uppercase">Last Assignment</div>
                        <div className="h5 mb-0">MongoDB</div>
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-calendar fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
             {/* <!-- Current Task Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-2 order-xl-3 mb-4">
                <div className="card border-primary shadow">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="font-weight-bold text-primary text-uppercase">My Task</div>
                        <div className="h5 mb-0">Task 4.2</div>
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-clipboard-list fa-2x"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
             {/* <!-- Unread Messages Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-4 order-xl-4 mb-4">
                <div className="card border-danger shadow">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="font-weight-bold text-danger text-uppercase">Unread Messages</div>
                        <div className="h5 mb-0">15</div>
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-comments fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>	
          
        )
    }
}
