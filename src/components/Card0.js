import React, { Component } from 'react'

export default class Card0 extends Component {
    render() {
        return (
            <React.Fragment>
                 {/* <!-- Next Assignment Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-1 order-xl-1 mb-4">
                <div className="card border-warning shadow rounded-pill">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
        <div className="font-weight-bold text-warning text-uppercase">{this.props.name}</div>
        <div className="h5 mb-0">{this.props.Subname}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fa fa-calendar fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
        )
    }
}


