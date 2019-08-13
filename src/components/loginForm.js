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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({ account })
  }

  render() {
    const { account } = this.state

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              className="form-control"
              type="password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    )
  }
}

export default LoginForm