import React, { Component } from 'react'
import axios from 'axios'
import ControlMenu from '../ControlMenu/ControlMenu.jsx'
import WebsiteWindow from '../WebsiteWindow/WebsiteWindow.jsx'
import { PageWrapper, BuilderUI } from './styles.jsx'
import { createHTML } from '../../data/createHTML.js'
import styles from './editorUI.css'

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
    this.updateElement = this.updateElement.bind(this)
    this.printHTML = this.printHTML.bind(this)
    this.deleteElement = this.deleteElement.bind(this)
  }

  addElement(e, data) {
    // e.preventDefault()
    e.persist()
    const createID = () => {
      return Math.floor(Math.random() * 1000000000000) + 1
    }
    data.objectID = createID()
    let elements = [...this.state.elements, data]

    this.setState({ elements: elements })
  }

  updateElement(e, data) {
    e.persist()
    console.log('editor updating an element', data)
    // find element by objectID
    let elements = [...this.state.elements]
    let i = undefined
    for (let index = 0, length = elements.length; index < length; index++) {
      if (elements[index].objectID === data.objectID) {
        i = index
      }
    }

    if (i === 0) {
      elements = [data, ...elements.slice(1)]
    } else if (i === elements.length - 1) {
      elements = [...elements.slice(0, elements.length - 1), data]
    } else {
      elements = [...elements.slice(0, i), data, ...elements.slice(i + 1)]
    }

    // update state with new element instead of old
    this.setState({ elements: elements })
    console.log('elements', elements, 'state after update', this.state.element)
  }
  deleteElement(e, id) {
    e.persist()
    // find element by objectID
    let elements = [...this.state.elements]
    let i = undefined
    for (let index = 0, length = elements.length; index < length; index++) {
      if (elements[index].objectID === id) {
        i = index
      }
    }

    if (i === 0) {
      elements = [...elements.slice(1)]
    } else if (i === elements.length - 1) {
      elements = [...elements.slice(0)]
    } else {
      elements = [...elements.slice(0, i), ...elements.slice(i + 1)]
    }
    this.setState({ elements: elements })
    console.log('elements', elements, 'state after update', this.state.element)
  }

  handleSave(e) {
    e.preventDefault()
    const data = {
      elements: this.state.elements,
      user: this.state.userData.username,
      html: createHTML(this.state.elements)
    }
    axios
      .post('/api/saveRawData', data)
      .then(res => {
        console.log('we successfully saved your raw data to the editor', res)
        res.status(201).send()
      })
      .catch(err => console.error(err))
  }

  printHTML(e) {
    e.preventDefault()
    alert(createHTML(this.state.elements))
  }

  componentDidMount() {
    const request = async () => {
      let json = await axios.get('/api/fetchRawData', {
        params: {
          username: this.state.userData.username,
          responseType: 'json'
        },
        responseType: 'json'
      })
      return json
    }
    request()
      .then(res => {
        let incomingData = res.data
        let newdata = JSON.parse(res.data.elements)
        incomingData.elements = newdata
        this.setState(incomingData)
        res.status(201).send()
      })
      .catch(err => console.error('couldnt fetch raw data from client ', err))
  }

  render() {
    console.log('editor state', this.state.elements)
    return (
      <PageWrapper>
        <h2>Make your web-blog with a breeze!</h2>
        <BuilderUI>
          <ControlMenu addElement={this.addElement} />
          <WebsiteWindow
            elements={this.state.elements}
            updateElement={this.updateElement}
            deleteElement={this.deleteElement}
          />
        </BuilderUI>
        <div className={styles.actionButtonsContainer}>
          <button onClick={this.handleSave}>SAVE THE RAW DATA</button>
          <button onClick={this.printHTML}>Get HTML code</button>
        </div>
        <text />
      </PageWrapper>
    )
  }
}

export default Editor
