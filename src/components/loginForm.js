import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import { login } from '../services/authService'

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

  doSubmit = async () => {
    const { data } = this.state
    await login(data.username, data.password)
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton("Login")}
        </form>
      </>
    )
  }
}

export default LoginForm