import React, { Component } from 'react'
import { PageWrapper } from './styles.jsx'
import Element from '../Element/Element.jsx'
import TextElement from '../TextElement/TextElement.jsx'

class WebsiteWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // make it take big portion of the screen, give border
    return (
      <PageWrapper id="Website">
        {this.props.elements.map(element => {
          // const style = `"color:${element.attributes.color}; font-size:${
          //   element.attributes.size
          // }; background-color: ${element.attributes.background}"`
          // check it's order
          // then place it accordingly
          // <{element.tag}>{element.body}</{element.tag}
          if (element.tag === 'p') {
            return (
              <TextElement
                {...element}
                updateElement={this.props.updateElement}
              />
            )
          }
        })}
      </PageWrapper>
    )
  }
}

export default WebsiteWindow
