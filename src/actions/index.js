export const addScope = scope => ({
  type: 'ADD_SCOPE',
  scope
})

export const removeScope = scope => ({
  type: 'REMOVE_SCOPE',
  scope
})

export const addResponseType = responseType => ({
  type: 'ADD_RESPONSE_TYPE',
  responseType
})

export const removeResponseType = responseType => ({
  type: 'REMOVE_RESPONSE_TYPE',
  responseType
})
