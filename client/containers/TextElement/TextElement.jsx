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
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelect(e) {
    e.preventDefault()
    // console.log('selected an element')
    this.setState({ selected: !this.state.selected })
  }

  handleChange(e, data) {
    // console.log('TE handle change, e / data: ', e.targe, data)
    // this.props.updateElement(data)
    // e.preventDefault()
    // this.setState({ [e.target.className]: e.target.value })
    // console.log('text element state after handle change', this.state)
  }

  handleInput(e) {
    e.preventDefault()
    // e.persist()
    console.log('handleInput', this.state, e.target)
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
    // console.log('state of TExt Element after change', this.state)
  }

  render() {
    const style = {
      ...this.state.attributes
    }

    // console.log(
    //   'text element state/props data',
    //   this.state.data,
    //   this.props.data
    // )

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
