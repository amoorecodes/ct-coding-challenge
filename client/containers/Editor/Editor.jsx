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
    this.updateElement = this.updateElement.bind(this)
  }

  addElement(e, data) {
    // e.preventDefault()
    e.persist()

    const createID = () => {
      return Math.floor(Math.random() * 1000000000000) + 1
    }
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    data.objectID = createID()
    let elements = [...this.state.elements, data]

    this.setState({ elements: elements })
  }

  updateElement(e, data) {
    e.persist()
    // e.preventDefault()
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
        res.status(201).send()
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    // console.log(this.state)
    // if there is html => parse it into elements
    // if there are no html => start new template
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
        // let json = JSON.parse(res)
        console.log('succesfully downloaded your data', res)
        let incomingData = res.data
        let newdata = JSON.parse(res.data.elements)
        incomingData.elements = newdata
        console.log('last session', incomingData)
        this.setState(incomingData)
        console.log('state after axios ', this.state.elements)
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
          />
        </BuilderUI>
        <button onClick={this.handleSave}>SAVE THE RAW DATA</button>
      </PageWrapper>
    )
  }
}

export default Editor
