import React from 'react'
import { render } from 'react-dom'
let show = ROUTES[window.location.pathname.substring(1)]
console.log(ROUTES)
//let component = require(`${CWD}/views/${show}`).default

render(
  React.createElement(component, null),
  document.getElementById('app')
)
