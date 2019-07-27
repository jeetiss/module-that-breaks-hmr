import { useReducer } from 'react'

const merge = (prev, next) => ({...prev, ...next})
const useState = (initial) => useReducer(merge, initial)

export { useState }
