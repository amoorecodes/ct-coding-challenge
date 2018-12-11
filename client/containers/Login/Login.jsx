import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      authenticated: false
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({ [e.target.className]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onChange={this.handleInput}>
          <p>Username:</p>
          <input className="username" type="text" val={this.state.username} />
          <p>Password:</p>
          <input className="password" type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login
