const audience = (state = 'https://basic-backend-express', action) => {
  switch (action.type) {
    case 'UPDATE_AUDIENCE':
      return action.audience
    default:
      return state
  }
}

export default audience