import React from 'react'
import { elements } from '../../data/elements.js'
import ElementButton from '../../components/ElementButton/ElementButton.jsx'

const ControlMenu = props => {
  const divStyles = {
    padding: '0 10px'
  }

  return (
    <div style={divStyles}>
      {elements.map(item => (
        <ElementButton
          {...item}
          addElement={props.addElement}
          className="controlMenuButton"
        />
      ))}
    </div>
  )
}

export default ControlMenu
