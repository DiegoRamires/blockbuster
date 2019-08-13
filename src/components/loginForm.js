import React, { Component } from 'react'

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log("Submitted")
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" className="form-control" type="text"/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    )
  }
}

export default LoginForm