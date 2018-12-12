import React, { Component } from 'react'
import { PageWrapper } from './styles.jsx'

class WebsiteWindow extends Component {
  constructor(props) {
    super(props)
    this.state = props.state
  }

  render() {
    // console.log('state of window', this.state, this.props)
    // make it take big portion of the screen, give border
    return (
      <PageWrapper>
        <p>this is going to be a big window</p>
      </PageWrapper>
    )
  }
}

export default WebsiteWindow
