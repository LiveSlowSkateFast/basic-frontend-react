const responseBody = (state = '{}', action) => {
  switch (action.type) {
    case 'UPDATE_RESPONSE_BODY':
      return action.responseBody
    default:
      return state
  }
}

export default responseBody