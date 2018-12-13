import React from 'react'

const Element = props => {
  const type = props.tag
  const styles = { ...props.attributes }

  const style = `"color:${styles.color}; font-size:${
    styles.size
  }; background-color: ${styles.background}"`
  if (type === 'p') {
    return <p style={style}>{props.data}</p>
  }
}

export default Element
