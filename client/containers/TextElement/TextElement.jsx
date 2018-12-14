import React, { Component } from 'react'
import ElementsControls from '../ElementControls/ElementsControls.jsx'

class TextElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
      selected: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSelect(e) {
    e.preventDefault()
    this.setState({ selected: !this.state.selected })
  }

  handleInput(e) {
    e.preventDefault()
    // e.persist()

    // when you make changes to text, save it in attreibutes of an object
    if (
      e.target.className === 'fontSize' ||
      e.target.className === 'color' ||
      e.target.className === 'background' ||
      e.target.className === 'opacity' ||
      e.target.className === 'border' ||
      e.target.className === 'src'
    ) {
      let attributes = { ...this.state.attributes }
      if (e.target.className === 'fontSize') {
        attributes[e.target.className] = e.target.value + 'px'
      } else {
        attributes[e.target.className] = e.target.value
      }
      this.setState({ attributes })
    } else {
      this.setState({ [e.target.className]: e.target.value })
    }
  }

  render() {
    const style = {
      ...this.state.attributes
    }

    return this.state.selected ? (
      <div>
        <p
          style={style}
          onClick={this.handleSelect}
          // handleInput={this.handleInput}
          // handleChange={this.handleChange}
          value={this.state.data}
        >
          {this.state.data}
        </p>
        <div>
          <ElementsControls
            elementDetails={{ ...this.state }}
            updateElement={this.props.updateElement}
            handleInput={this.handleInput}
            deleteElement={this.props.deleteElement}
          />
        </div>
      </div>
    ) : (
      <p
        style={style}
        onClick={this.handleSelect}
        handleInput={this.handleInput}
        handleChange={this.handleChange}
      >
        {this.state.data}
      </p>
    )
  }
}

export default TextElement
