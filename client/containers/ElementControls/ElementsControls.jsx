import React, { Component } from 'react'
import { PageWrapper } from '../../styles/globalUI.jsx'

class ElementsControls extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props.elementDetails }
    // this.addElement = this.addElement.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    this.state.addElement(e, { ...this.state })
  }

  handleUpdate(e) {
    e.preventDefault()
    // console.log('EC e/ data', this.state, 'props', this.props)
    this.props.updateElement(e, {
      ...this.props.elementDetails
    })
    this.setState({ seleceted: false })
  }

  handleDelete(e) {
    e.preventDefault()
    console.log('are we deleting? ', this.state.objectID)
    this.props.deleteElement(e, this.state.objectID)
  }

  render() {
    if (this.props.className === 'controlMenu') {
      return (
        <PageWrapper>
          <form>
            <p>Your Text</p>
            <input
              className="data"
              type="data"
              value={this.props.elementDetails.data}
              onChange={this.props.handleInput}
            />
            <p>Font Color</p>
            <input
              className="attributes.color"
              type="color"
              onChange={this.props.handleInput}
              value={this.state.color}
            />

            <p>Background Color</p>
            <input
              className="background"
              type="color"
              onChange={this.props.handleInput}
              value={this.state.background}
            />

            <p>Font Size</p>
            <input
              className="size"
              type="number"
              name="pixel size"
              min="8"
              max="64"
              onChange={this.props.handleInput}
              value={this.state.size}
            />
          </form>
          <button onClick={this.handleClick}>Add {this.state.name}</button>
        </PageWrapper>
      )
    } else {
      return (
        <div>
          <form>
            <p>Your Text</p>
            <input
              className="data"
              type="data"
              value={this.props.elementDetails.data}
              onChange={this.props.handleInput}
            />
            <input
              className="data"
              type="submit"
              onClick={this.handleUpdate}
              value="update"
            />
            <p>Font Color</p>
            <input
              className="color"
              type="color"
              value={this.props.elementDetails.color}
              onChange={this.props.handleInput}
            />
            <input
              className="color"
              type="submit"
              onClick={this.handleUpdate}
              value="update"
            />

            <p>Background Color</p>
            <input
              className="background"
              type="color"
              onChange={this.props.handleInput}
              value={this.props.elementDetails.background}
            />
            <input
              className="background"
              type="submit"
              onClick={this.handleUpdate}
              value="update"
            />

            <p>Font Size</p>
            <input
              className="fontSize"
              type="number"
              name="pixel size"
              min="8"
              max="64"
              value={this.props.elementDetails.size}
              onChange={this.props.handleInput}
            />
            <input
              className="fontSize"
              type="submit"
              onClick={this.handleUpdate}
              value="update"
            />
          </form>
          <button onClick={this.handleDelete}>Delete Element</button>
        </div>
      )
    }
  }
}

export default ElementsControls
