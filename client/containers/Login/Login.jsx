import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Editor from '../Editor/Editor.jsx'
import axios from 'axios'
import styles from './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      passcode: '',
      authenticated: false,
      userData: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleInput(e) {
    this.setState({ [e.target.className]: e.target.value })
  }

  handleLogin(e) {
    const userdata = {
      username: this.state.username,
      passcode: this.state.passcode
    }

    // send axios request to a database to check user/password combination
    axios
      .post('/api/authenticate', userdata)
      .then(res => {
        console.log('success', res, res.data)
        // change state of authentification for redirect
        this.setState({
          authenticated: !this.state.authenticated,
          userData: res.data[0]
        })
      })
      .catch(err => console.error('axios error', err))
    // if username and password match Link to an Editor
    // load HTML preset into editor
    e.preventDefault()
  }

  render() {
    if (this.state.authenticated) {
      return (
        <Redirect
          to={{ pathname: '/editor', state: { referrer: this.state.userData } }}
        />
      )
    } else {
      return (
        <div style={styles}>
          <form
            className={styles.loginForm}
            onChange={this.handleInput}
            onSubmit={this.handleLogin}
          >
            <p>Username:</p>
            <input
              className="username"
              type="text"
              value={this.state.username}
            />
            <p>Password:</p>
            <input
              className="passcode"
              type="text"
              value={this.state.passcode}
            />
            <input type="submit" />
          </form>
        </div>
      )
    }
  }
}

export default Login
