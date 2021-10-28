const defaultState = {
  statusList: [
    { id: 1, name: 'All', path: '#/' },
    { id: 2, name: 'Active', path: '#/active' },
    { id: 3, name: 'Completed', path: '#/Completed' }
  ]
}

const status = (state = defaultState.statusList, action) => {
  switch (action.type) {
    default:
      return state
  }
}

module.exports = status
