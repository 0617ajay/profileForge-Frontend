import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <div id="errorfound">
        <h3>{message}</h3>
    </div>
  )
}

export default ErrorComponent