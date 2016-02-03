import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect} from 'react-redux'

let topLevel = window.location.pathname.substring(1)

let routes = require(`${CWD}/routes`).default
let routeList = routes.map(route => {
  
  let actionBindings = {}
  let store = createStore(route.prototype.reducer)

  for(let action in route.actions) {

    actionBindings[route.actions[action]] = value => {
      let item = route.prototype[route.actions[action]](value)
      store.dispatch({ type: route.actions[action], item })
    }

  }
  return {
    name: route.name.toLowerCase(),
    actions: actionBindings,
    store
  }
})


let route = routeList.filter(route => route.name === topLevel)[0]
let component = require(`${CWD}/views/${route.name}`).default
let store = route.store

render(
  <Provider store={route.store}>
    {React.createElement(connect(state => ({store: state}))(component), { actions: route.actions })}
  </Provider>,
  document.getElementById('app')
)
