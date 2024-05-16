import React from 'react'
import "./Container.css"

const Container = (props) => {
  return (
    <div className='container-main'>{props.children}</div>
  )
}

export default Container