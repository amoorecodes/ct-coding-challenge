import React, { Component } from 'react'
import ElementControls from '../../containers/ElementControls/ElementsControls.jsx'
class ElementButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({ toggleMenu: !this.state.toggleMenu })
  }
  render() {
    return this.state.toggleMenu ? (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
        <ElementControls elementDetails={{ ...this.props }} />
      </div>
    ) : (
      <button onClick={this.handleClick}>{this.props.name}</button>
    )
  }
}

export default ElementButton
