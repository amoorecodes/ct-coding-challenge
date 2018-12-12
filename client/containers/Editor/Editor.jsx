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
      elements: ['1', '2'],
      userData: this.props.userData
    }
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
          <ControlMenu />
          <WebsiteWindow state={{ ...this.state.elements }} />
        </BuilderUI>
      </PageWrapper>
    )
  }
}

export default Editor
