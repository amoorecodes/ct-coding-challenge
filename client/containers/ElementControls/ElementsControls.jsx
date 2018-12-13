import React, { Component } from 'react'
import { PageWrapper } from '../../styles/globalUI.jsx'

class ElementsControls extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props.elementDetails }
    // this.addElement = this.addElement.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    this.state.addElement(e, { ...this.state })
  }

  render() {
    return (
      <PageWrapper>
        <p>this will be clickable menu</p>
        <p>something else</p>
        <button onClick={this.handleClick}>Add {this.state.name}</button>
      </PageWrapper>
    )
  }
}

export default ElementsControls
