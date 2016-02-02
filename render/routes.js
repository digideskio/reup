module.exports = ROUTES.map(route => {
  return {
    name: route,
    path: route,
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require(`${PROJECT_DIR}/views/${route}.jsx`))
      })
    }
  }
})
