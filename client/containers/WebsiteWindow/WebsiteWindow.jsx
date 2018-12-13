import React, { Component } from 'react'
import { PageWrapper } from './styles.jsx'
import Element from '../Element/Element.jsx'

class WebsiteWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // make it take big portion of the screen, give border
    return (
      <PageWrapper id="Website">
        <p>this is going to be a big window</p>
        {this.props.elements.map(element => {
          // const style = `"color:${element.attributes.color}; font-size:${
          //   element.attributes.size
          // }; background-color: ${element.attributes.background}"`
          // check it's order
          // then place it accordingly
          // <{element.tag}>{element.body}</{element.tag}
          return <h1>added {element.data}</h1>
        })}
      </PageWrapper>
    )
  }
}

export default WebsiteWindow
