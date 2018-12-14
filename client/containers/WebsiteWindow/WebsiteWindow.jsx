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
          if (element.tag === 'p') {
            // pass element's data as props and pass two binded functions from Editor
            return (
              <TextElement
                {...element}
                updateElement={this.props.updateElement}
                deleteElement={this.props.deleteElement}
              />
            )
          }
        })}
      </PageWrapper>
    )
  }
}

export default WebsiteWindow
