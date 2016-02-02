import React from 'react'
import { render } from 'react-dom'
let show = ROUTES[0]
let component = require(`${CWD}/views/${show}`).default

render(
  React.createElement(component, null),
  document.getElementById('app')
)
