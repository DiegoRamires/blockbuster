import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import Input from './common/input'

class LoginForm extends Form {
  state = {
    data: {
      username: '', password: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  }

  doSubmit = () => {
    console.log("Submitted")
  }

  render() {
    const { data, errors } = this.state

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </>
    )
  }
}

export default LoginForm