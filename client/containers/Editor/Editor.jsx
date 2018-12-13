import React, { Component } from 'react'
import axios from 'axios'
import ControlMenu from '../ControlMenu/ControlMenu.jsx'
import WebsiteWindow from '../WebsiteWindow/WebsiteWindow.jsx'
import { PageWrapper, BuilderUI } from './styles.jsx'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      html: props.html,
      elements: [],
      userData: this.props.userData || { username: 'test_user' }
    }
    this.addElement = this.addElement.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  addElement(e, data) {
    // e.preventDefault()
    e.persist()
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    let elements = [...this.state.elements, data]

    this.setState({ elements: elements })
  }

  handleSave(e) {
    e.preventDefault()
    // use helper function to create an html

    // store all elements

    const data = {
      elements: this.state.elements,
      user: this.state.userData.username
    }
    axios
      .post('/api/saveRawData', data)
      .then(res => {
        console.log('we successfully saved your raw data to the editor', res)
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    // console.log(this.state)
    // if there is html => parse it into elements
    // if there are no html => start new template
  }

  render() {
    return (
      <PageWrapper>
        <h2>this is editor</h2>
        <BuilderUI>
          <ControlMenu addElement={this.addElement} />
          <WebsiteWindow elements={this.state.elements} />
        </BuilderUI>
        <button onClick={this.handleSave}>SAVE THE RAW DATA</button>
      </PageWrapper>
    )
  }
}

export default Editor
