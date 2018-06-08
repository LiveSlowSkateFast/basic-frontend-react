const scopes = (state = ['openid'], action) => {
  switch (action.type) {
    case 'ADD_SCOPE':
      return [...state, action.scope]
    case 'REMOVE_SCOPE':
      const i = state.indexOf(action.scope)
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default scopes
// expect(
//     scopes(['openid'], {type: 'ADD_SCOPE', scope: 'profile'})
// ).toEqual(['openid', 'profile'])

// expect(
//     scopes(['openid', 'profile'], {type: 'ADD_SCOPE', scope: 'profile'})
// ).toEqual(['openid', 'profile'])

// expect(
//     scopes(['openid', 'profile'], {type: 'REMOVE_SCOPE', scope: 'profile'})
// ).toEqual(['openid'])

// expect(
//     scopes(['openid', 'profile'], {type: 'REMOVE_SCOPE', scope: 'spam'})
// ).toEqual(['openid', 'profile'])

// expect(
//     scopes(undefined, {})
// ).toEqual(['openid'])