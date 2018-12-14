import React from 'react'
import { elements } from '../../data/elements.js'
import ElementButton from '../../components/ElementButton/ElementButton.jsx'

const ControlMenu = props => {
  const divStyles = {
    padding: '0 10px'
  }

  // due to dumb component cannot input/ change attributes inside Control Menu, same functionality can be seen in window itself

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
