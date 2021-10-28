const defaultState = {
  currentStatus: 'All'
}

const current = (state = defaultState.currentStatus, action) => {
  switch (action.type) {
    case 'STATUS':
      return (state = action.status)
    default:
      return state
  }
}
module.exports = current
