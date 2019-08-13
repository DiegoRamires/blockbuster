import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    account: {
      username: '', password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("Submitted")
  }

  handleChange = e => {
    const account = { ...this.state.account }
    account.username = e.currentTarget.value
    this.setState({ account })
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              className="form-control"
              type="text"
            />
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