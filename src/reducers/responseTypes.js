const responseTypes = (state = ['token', 'id_token'], action) => {
  switch (action.type) {
    case 'ADD_RESPONSE_TYPE':
      return [...state, action.responseType]
    case 'REMOVE_RESPONSE_TYPE':
      const i = state.indexOf(action.responseType)
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default responseTypes